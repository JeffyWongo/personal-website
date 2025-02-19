import Image from "next/image";
import React from "react";
import marketing from "../../public/assets/projects/marketing.png";
import marketing1 from "../../public/assets/projects/marketing1.png";
import marketing2 from "../../public/assets/projects/marketing2.png";
import marketing3 from "../../public/assets/projects/marketing3.png";
import marketing4 from "../../public/assets/projects/marketing4.png";
import marketing5 from "../../public/assets/projects/marketing5.png";
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
          src={marketing}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Marketing Analysis Project</h2>
          <h3>Microsoft SQL Server, Python, pandas, PowerBI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-4">Introduction to Business Problem</h2>
          <p className="mb-12">
          ShopEasy, an online retail business, is facing reduced customer engagement and conversion rates despite launching several new online marketing campaigns. They are reaching out to you to help conduct a detailed analysis and identify areas for improvement in their marketing strategies.

          </p>
          <h2 className="py-4">Key Points:</h2>
          <p className="py-1">
Reduced Customer Engagement: The number of customer interactions and engagement with the site and marketing content has declined.</p>
<p className="py-1">Decreased Conversion Rates: Fewer site visitors are converting into paying customers.</p>
<p className="py-1">High Marketing Expenses: Significant investments in marketing campaigns are not yielding expected returns.</p>
<p className="py-1 mb-12">Need for Customer Feedback Analysis: Understanding customer opinions about products and services is crucial for improving engagement and conversions.
</p>
          
          <h2 className="py-4">Overview</h2>
          <p className="py-1">
          Decreased Conversion Rates: The conversion rate demonstrated a strong rebound in December, reaching 10.2%, despite a notable dip to 5.0% in October.
          </p>
          <p className="py-1">
          Reduced Customer Engagement:
There is a decline in overall social media engagement, with views dropping throughout the year.
While clicks and likes are low compared to views, the click-through rate stands at 15.37%, meaning that engaged users are still interacting effectively.
          </p>
          <p className="py-1">Customer Feedback Analysis:
Customer ratings have remained consistent, averaging around 3.7 throughout the year.
Although stable, the average rating is below the target of 4.0, suggesting a need for focused improvements in customer satisfaction, for products below 3,5.
</p>
    <Image
          src={marketing}
          alt="/"
        />
          <h2 className="py-4">Decreased Conversion Rates</h2>
          <p className="py-1">
          General Conversion Trend:
Throughout the year, conversion rates varied, with higher numbers of products converting successfully in months like February and July. This suggests that while some products had strong seasonal peaks, there is potential to improve conversions in lower-performing months through targeted interventions.

          </p>
          <p className="py-1">
          Lowest Conversion Month:
May experienced the lowest overall conversion rate at 4.3%, with no products standing out significantly in terms of conversion. This indicates a potential need to revisit marketing strategies or promotions during this period to boost performance.

          </p>
          <p className="py-1">Highest Conversion Rates:
January recorded the highest overall conversion rate at 18.5%, driven significantly by the Ski Boots with a remarkable 150% conversion. This indicates a strong start to the year, likely fueled by seasonal demand and effective marketing strategies.
</p>
<Image
          src={marketing1}
          alt="/"
        />
<h2 className="py-4">Reduced Customer Engagement</h2>
          <p className="py-1">
          Declining Views:
Views peaked in February and July but declined from August and on, indicating reduced audience engagement in the later half of the year.


          </p>
          <p className="py-1">
          Low Interaction Rates:
Clicks and likes remained consistently low compared to views, suggesting the need for more engaging content or stronger calls to action.


          </p>
          <p className="py-1">Content Type Performance:
Blog content drove the most views, especially in April and July, while social media and video content maintained steady but slightly lower engagement.
</p>
        <Image
          src={marketing2}
          alt="/"
        />
        <Image
          src={marketing3}
          alt="/"
        />
<h2 className="py-4">Customer Feedback Analysis</h2>
          <p className="py-1">
          Customer Ratings Distribution:
The majority of customer reviews are in the higher ratings, with 140 reviews at 4 stars and 135 reviews at 5 stars, indicating overall positive feedback. Lower ratings (1-2 stars) account for a smaller proportion, with 26 reviews at 1 star and 57 reviews at 2 stars.

          </p>
          <p className="py-1">
          Sentiment Analysis:
Positive sentiment dominates with 275 reviews, reflecting a generally satisfied customer base. Negative sentiment is present in 82 reviews, with a smaller number of mixed and neutral sentiments, suggesting some areas for improvement but overall strong customer approval.
          </p>
          <p className="py-1">Opportunity for Improvement:
The presence of mixed positive and mixed negative sentiments suggests that there are opportunities to convert those mixed experiences into more clearly positive ones, potentially boosting overall ratings. Addressing the specific concerns in mixed reviews could elevate customer satisfaction.
</p>
        <Image
          src={marketing4}
          alt="/"
        />
        <Image
          src={marketing5}
          alt="/"
        />
<h2 className="py-4">Goals & Actions</h2>
          <p className="py-4">
          Increase Conversion Rates:</p>
          <p>Goal: Identify factors impacting the conversion rate and provide recommendations to improve it.</p>
          <p>Insight: Highlight key stages where visitors drop off and suggest improvements to optimize the conversion funnel.</p>
          <p>Target High-Performing Product Categories: Focus marketing efforts on products with demonstrated high conversion rates, such as Kayaks, Ski Boots, and Baseball Gloves. Implement seasonal promotions or personalized campaigns during peak months (e.g., January and September) to capitalize on these trends.
          </p>
          <p className="py-4">
          Enhance Customer Engagement:</p>
        <p>Goal: Determine which types of content drive the highest engagement. </p>
        <p>Insight: Analyze interaction levels with different types of marketing content to inform better content strategies.</p>
        <p>Revitalize Content Strategy: To turn around declining views and low interaction rates, experiment with more engaging content formats, such as interactive videos or user-generated content. Additionally, boost engagement by optimizing call-to-action placement in social media and blog content, particularly during historically lower-engagement months (September-December).
          </p>
          <p className="py-4">Improve Customer Feedback Scores:</p>
          <p>Goal: Understand common themes in customer reviews and provide actionable insights.</p>
          <p>Insight: Identify recurring positive and negative feedback to guide product and service improvements.</p>
          <p>Address Mixed and Negative Feedback: Implement a feedback loop where mixed and negative reviews are analyzed to identify common issues. Develop improvement plans to address these concerns. Consider following up with dissatisfied customers to resolve issues and encourage re-rating, aiming to move average ratings closer to the 4.0 target.
</p>

          <a
            href="https://github.com/JeffyWongo/MarketingPortfolioProject"
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
                <RiRadioButtonFill className="pr-1" /> Microsoft SQL Server
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> PowerBI
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
