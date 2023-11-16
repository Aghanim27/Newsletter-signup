import ListImg from "../assets/images/icon-success.svg";

function Success({ submittedEmail }) {
  return (
    <div className="bg-gray-100 rounded-lg p-10">
      <img src={ListImg} alt="Success" />
      <h1 className="text-5xl font-bold mt-5">Thanks for Subscribing!</h1>
      <p className="mt-10 w-4/5">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{submittedEmail}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
    </div>
  );
}

export default Success;
