import "../../styles/button.css"
import "../../styles/Typo.css"


function SubmitButton({ name, description, cssClass}) {
    return (
        <button type="submit" name={name} className={cssClass}>
          {description}
        </button>
    );
  }
  
  export default SubmitButton;