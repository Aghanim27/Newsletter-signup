import DesktopImg from "../assets/images/illustration-sign-up-desktop.svg";
import ListIcon from "../assets/images/icon-list.svg";
import Input from "./Input";

function Content({ setSubmittedEmail, setIsSubmitted }) {
  return (
    <div className="flex flex-row max-md:flex-col-reverse">
      <div className="mt-12 mr-5">
        <h1 className="text-5xl lg:text-4xl font-bold">Stay updated!</h1>
        <h4 className="text-xl lg:text-xl font-semibold mt-5">
          Join 60,000+ product managers receiving monthly updates on:
        </h4>
        <div className="flex flex-row mt-3">
          <img src={ListIcon} alt="List-Icon" />
          <p className="ml-2 lg:text-sm">
            Product discovery and building what matters
          </p>
        </div>
        <div className="flex flex-row mt-3">
          <img src={ListIcon} alt="List-Icon" />
          <p className="ml-2 lg:text-sm">
            Measuring to ensure updates are a success
          </p>
        </div>
        <div className="flex flex-row mt-3">
          <img src={ListIcon} alt="List-Icon" />
          <p className="ml-2 lg:text-sm">And much more!</p>
        </div>
        <Input
          setSubmittedEmail={setSubmittedEmail}
          setIsSubmitted={setIsSubmitted}
        />
      </div>
      <div>
        <img
          src={DesktopImg}
          alt="Desktop Image"
          className="max-md:w-full max-md:h-full max-md:object-cover"
        />
      </div>
    </div>
  );
}

export default Content;
