import sha256 from 'crypto-js/sha256'
import { useState, useEffect } from 'react'
import { Grid } from './components/grid/Grid'
import { Keyboard } from './components/keyboard/Keyboard'
import { InfoModal } from './components/modals/InfoModal'
import { StatsModal } from './components/modals/StatsModal'
import { SettingsModal } from './components/modals/SettingsModal'
import { 
  WIN_MESSAGES,
  GAME_COPIED_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WORD_NOT_FOUND_MESSAGE,
  CORRECT_WORD_MESSAGE,
  HARD_MODE_ALERT_MESSAGE,
  DISCOURAGE_INAPP_BROWSER_TEXT,
  } from './constants/strings'
  import { 
    MAX_CHALLENGES,
    REVEAL_TIME_MS,
    WELCOME_INFO_MODAL_MS,
    DISCOURAGE_INAPP_BROWSERS,
  } from './constants/settings'
  import {
    isWordInWordList,
    isWinningWord,
    solution,
    findFirstUnusedReveal,
    unicodeLength,
  } from '.lib/words'
  import { addStatsForCompletedGame, loadStats } from './lib/stats'
  import { 
    loadGameStateFromLocalStorage,
    saveGameStateToLocalStorage,
    setStoredIsHighContrastMode,
    getStoredIsHighContrastMode,
  } from '.lib/localStorage
  import { default as GraphemeSplitter } from 'grapheme-splitter'
  
  import './App.css'
  import { AlertContainer } from './components/alerts/AlertContainer'
  import { useAlert } from './contexts/AlertContext'
  import { Navbar } from './components/navbar/Navbar'
  import { isInAppBrowser } from './lib/browser'
  
  function App() {
    const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
   ).matches
   
   const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert()
   const [currentuess, setCurrentGuess] = useState('')
