import { ClockIcon, HomeModernIcon } from "@heroicons/react/24/outline";

const CountDownBanner = () => {
  return (
    <div className="bg-yellow-500 text-white p-4 flex items-center w-full justify-center">
      {/* Text in the middle with icons inside */}
      <div className="flex items-center font-bold">
        {/* Left Clock Icon */}
        <ClockIcon className="w-6 h-6 mr-2" />

        {/* Text with padding */}
        <div className="text-center p-2">38 روز مانده تا آغاز جشنواره</div>

        {/* Right Stopwatch Icon */}
        <HomeModernIcon className="w-6 h-6 ml-2" />
      </div>
    </div>
  );
};

export default CountDownBanner;
