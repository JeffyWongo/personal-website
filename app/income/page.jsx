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
          <h2 className="py-2">Adult Income Prediction Model</h2>
          <h3>Python / pandas / NumPy / scikit-learn / tensorflow</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          {/* <p className="">Project</p> */}
          <h2 className="py-4">Project</h2>
          <p className="mb-12">
          I worked with a dataset from the UCI Machine Learning Laboratory that contained 14 variables and over 30,000 entries. My goal was to build a model that predicts the income of adults based on these variables. After running numerous tests and making predictions, I realized that mitigating bias with such a small dataset would be challenging without creating a lot of synthetic data. When my prediction model worked, it performed well with the underlying distribution of the data. However, one major issue I faced was inconsistency—each time I ran the model, it produced different results. This became clear when I reran the notebook and got different outcomes from the original results.

Once I identified fairness issues in the dataset, my first step was to resample the data to include only white and Black individuals, as these were the only groups with more than 2,000 records. This helped balance the dataset somewhat, but I still had to deal with a significant imbalance in income levels: 78% of the entries had incomes below $50,000, while only 22% were above that threshold. As a result, the model could predict all 0's (less than $50,000) and still achieve a baseline accuracy of 78%.

Next, I looked into whether the model had issues with overfitting or underfitting and whether certain features had disproportionately large coefficients. To address this, I added dropout layers to the prediction model as a form of regularization. This helped a bit, as the model started predicting more 1's (greater than $50,000).

Finally, I analyzed the fairness of the model. This was tough because the model often predicted all 0's, making fairness analysis almost impossible. However, during a few tests where the model performed better, its predicted values closely matched the real data distributions. Based on this, I thought the model was relatively fair, given the dataset’s limitations.
          </p>
          {/* <h2>Data Sources</h2>
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
          </p> */}
          <a
            href="https://github.com/JeffyWongo/AdultIncomePredictionModel"
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
                <RiRadioButtonFill className="pr-1" /> scikit-learn
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> tensorflow
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
