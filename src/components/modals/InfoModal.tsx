import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. You can only use 5 letter words to complete the wordle. 
        After each guess, the color of the tiles will change to show how close your guess was to the word.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="B" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="L" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot. Therefore, it being yellow.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="G" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="F" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="T" status="absent" />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is not in the word in any spot. It will also appear gray on the bottom-center keyboard.
      </p>
      
      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        YAY! Holiday theme, ITS OUT! Enjoy the holiday words, with the revamp of the info modal!
        love - Dean ❤️
      </p>
    </BaseModal>
  )
}
