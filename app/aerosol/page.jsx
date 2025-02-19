import Image from "next/image";
import React from "react";
import aerosol from "../../public/assets/projects/aerosol3.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const aerosolPage = () => {
  return (
    <div className="w-full mb-48">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={aerosol}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Aerosol Concentration Predictor</h2>
          <h3>Python / pandas / NumPy / Matplotlib / scikit-learn / seaborn</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2 className="py-4">Introduction</h2>
          <p className="mb-12">
            Los Angeles is known for its poor air quality due to high levels of
            air pollution. Aerosols are an important component of air pollution
            and can have negative effects on human health. By building a model
            to predict aerosol concentrations, it can help better understand the
            relationship and factors between weather conditions and high levels
            of air pollution in any region. Our objective was to analyze the
            relationship between weather conditions and atmospheric aerosol
            concentrations in the Los Angeles, California region.
          </p>
          <h2>Data Sources</h2>
          <p className="py-4 mb-12">
            We used three different data sets and put them together to create
            our final dataset. The first dataset consisted of weather data with
            45 features from 2000 to 2022. Out of the 45 features, we selected
            the following: TMIN (min. temperature), TMAX (max. temperature),
            PRCP (precipitation), and AWND (average daily wind speed). The
            second dataset contained nitrous oxide data (NOx/pollution) and the
            third dataset had particulate matter 2.5mm (PM2.5). All three were
            combined to create our final dataset.
          </p>
          <h2>Analysis</h2>
          <p className="py-4 mb-12">
            We used K-NN regression to predict NOx and PM2.5. Before starting,
            the features were standardized with the exception of the target data
            that we planned to predict. To test our regression model, we used
            leave-one-out cross-validation. Our value of k was calculated using
            the square root of the size of the data. When used to predict NOx,
            our regression model performed well and was able to predict values
            with low error.
          </p>
          <h2>Results</h2>
          <p className="py-4 mb-12">
            For the results of our analysis, we can conclude that K-NN
            regression was great for predicting NOx using maximum and minimum
            temperature, average precipitation, and average wind speeds. With
            the output values of mean-squared error from running K-NN
            regression, predicting NOx achieved a close to 0 value with similar
            predicted versus actual values. Our model had .98 accuracy and .002
            MSE for predicting NOx levels. The K-NN classifier was successful in
            classifying PM2.5 and NOx measurements into their actual
            corresponding AQI danger categories. TMAX and TMIN have a strong
            positive correlation as they are both temperate-related and measure
            the same values. AWND has a weak positive correlation with TMIN and
            PRCP. PM2.5 and Avg_NOx have a weak positive correlation. Avg_NOx
            has a moderate negative correlation with TMIN and AWND.
          </p>
          <a
            href="https://github.com/JeffyWongo/CS105-project"
            target="_blank"
            rel="noreferrer"
            className="mr-8"
          >
            <button className="px-8 py-2 mt-4 dark:shadow-sm dark:border dark:border-gray-400">
              Report
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 h-[35vh] shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-sm dark:border dark:border-gray-400">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> NumPy
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Matplotlib
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> scikit-learn
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> seaborn
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default aerosolPage;
