import { SmallButton,MediumButton } from "../global/components/Buttons";


const StyeldComponent1 = () => {
    return (
      <div>
        <SmallButton color="red" bg="orange" border={true}>
          클릭1
        </SmallButton>
        <MediumButton color="white" bg="blue">
          클릭1
        </MediumButton>
      </div>
    );
};

export default StyeldComponent1;