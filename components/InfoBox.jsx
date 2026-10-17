const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  children,
  buttonInfo,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
      <a
        href={buttonInfo.Link}
        className={`${buttonInfo.BackgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-90`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
