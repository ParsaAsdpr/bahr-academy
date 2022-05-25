import React from "react";
import { PortalWithState } from "react-portal";
import { motion } from "framer-motion";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import PN from "persian-number";
import Filter from './Filter'

const FilterModal = (props) => {
  const [RangeValues, setRangeValues] = React.useState(10000000);

  const handleRange = () => {
    console.log(RangeValues);
  };
  const options = ["یک", "دو", "سه"];
  const [selectedOption, setOption] = React.useState(options[0]);

  const _onSelect = (option) => {
    setOption(option);
    console.log(option);
  };
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }) => (
        <React.Fragment>
          <Filter handleClick={openPortal} />
          {portal(
            <motion.div
              initial={{
                rotateX: "90deg",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                rotateX: "0deg",
                translateX: "-50%",
                translateY: "-50%",
              }}
              transition={{ duration: 0.3 }}
              className="fixed shadow-2xl top-1/4 left-1/2 px-14 py-8 bg-white rounded-lg"
            >
              <h3 className="text-3xl font-bold text-gray-700 text-center">
                فیلتر دوره ها
              </h3>

              <div className="flex flex-col">
                <div className="w-full mt-5">
                  <h4 className="text-lg text-gray-600 text-right font-bold">
                    فیلتر قیمت
                  </h4>
                  <p className="text-md py-3 text-center text-black">
                    {RangeValues === 0
                      ? "رایگان"
                      : `${PN.convertEnToPe(
                          RangeValues.toLocaleString()
                        )} از ۰ تا`}
                  </p>
                  <div className="w-[400px]">
                    <Range
                      step={200000}
                      min={0}
                      max={10000000}
                      value={RangeValues}
                      onChange={(e) => setRangeValues(e)}
                    />
                  </div>
                  <div className="flex flex-row pt-5 gap-0 justify-start">
                    <Dropdown
                      className="mx-auto rounded-md cursor-pointer"
                      options={options}
                      onChange={(e) => _onSelect(e)}
                      value={selectedOption}
                      placeholder="دسته بندی ها"
                    />
                    <p className="text-gray-600 text-lg font-bold">دسته بندی</p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 mt-7"
                  onClick={handleRange}
                >
                  ثبت
                </button>
              </div>
            </motion.div>
          )}
        </React.Fragment>
      )}
    </PortalWithState>
  );
};

export default FilterModal;