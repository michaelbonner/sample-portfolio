import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = () => {
  return (
    <div className="w-1/3 p-3">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="//tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">Beautiful sunset is nice.</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
      <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
          About
        </h1>
        <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
          Bonner
        </h2>
        <p className="text-gray-600 leading-relaxed mb-12">
          I'm a passionate web developer in Salt Lake using JAM technologies.
        </p>
      </div>
      <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
        <svg
          className="max-w-full"
          id="afc017fa-71c4-4ea6-a0c5-62cd2df9d074"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="885.35758"
          height="482.80164"
          viewBox="0 0 885.35758 482.80164"
        >
          <title>next_tasks</title>
          <ellipse
            cx="442.67879"
            cy="472.51947"
            rx="442.67879"
            ry="10.28217"
            fill="#e6e6e6"
          />
          <path
            d="M991.10133,340.82366H773.99613v-1.13682a3.3379,3.3379,0,0,0-3.3379-3.33791H678.89009a3.3379,3.3379,0,0,0-3.3379,3.33791v1.13682H457.55205a14.68552,14.68552,0,0,0-14.68553,14.68553V652.793a14.68552,14.68552,0,0,0,14.68553,14.68553H991.10127a14.68559,14.68559,0,0,0,14.68559-14.68558V355.50919A14.68553,14.68553,0,0,0,991.10133,340.82366Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#3f3d56"
          />
          <path
            d="M469.231,366a1.69518,1.69518,0,0,0-1.67578,1.70971v287.689a1.69518,1.69518,0,0,0,1.67578,1.70971H979.42188a1.69519,1.69519,0,0,0,1.67578-1.70971v-287.689A1.69519,1.69519,0,0,0,979.42188,366Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#fff"
          />
          <circle cx="566.558" cy="144.75371" r="5.36967" fill="#8c45a0" />
          <path
            d="M1015.5646,647.44258H964.47023V642.166c0-.2898-.32678-.52471-.72992-.52471H946.22224c-.40314,0-.72992.23491-.72992.52471v5.27661H934.54353V642.166c0-.2898-.32678-.52471-.72992-.52471H916.29554c-.40314,0-.72992.23491-.72992.52471v5.27661H904.61683V642.166c0-.2898-.32678-.52471-.72992-.52471H886.36884c-.40314,0-.72992.23491-.72992.52471v5.27661h-10.9488V642.166c0-.2898-.32678-.52471-.72992-.52471H856.44213c-.40314,0-.72992.23491-.72992.52471v5.27661H844.76342V642.166c0-.2898-.32678-.52471-.72992-.52471H826.51543c-.40314,0-.72992.23491-.72992.52471v5.27661H814.83672V642.166c0-.2898-.32678-.52471-.72992-.52471H796.58873c-.40314,0-.72992.23491-.72992.52471v5.27661H784.91V642.166c0-.2898-.32678-.52471-.72992-.52471H646.95521c-.40314,0-.72992.23491-.72992.52471v5.27661H635.2765V642.166c0-.2898-.32678-.52471-.72992-.52471H617.02851c-.40314,0-.72992.23491-.72992.52471v5.27661h-10.9488V642.166c0-.2898-.32678-.52471-.72992-.52471H587.1018c-.40314,0-.72992.23491-.72992.52471v5.27661H575.42309V642.166c0-.2898-.32678-.52471-.72992-.52471H557.1751c-.40314,0-.72992.23491-.72992.52471v5.27661H545.49639V642.166c0-.2898-.32678-.52471-.72992-.52471H527.2484c-.40314,0-.72992.23491-.72992.52471v5.27661h-10.9488V642.166c0-.2898-.32678-.52471-.72992-.52471H497.32169c-.40314,0-.72992.23491-.72992.52471v5.27661H485.643V642.166c0-.2898-.32678-.52471-.72992-.52471H467.395c-.40314,0-.72992.23491-.72992.52471v5.27661h-33.5763c-9.675,0-17.51807,5.63812-17.51807,12.59307v5.69429c0,6.95493,7.84312,12.593,17.51807,12.593H1015.5646c9.675,0,17.51807-5.63811,17.51807-12.593v-5.69429C1033.08267,653.0807,1025.23956,647.44258,1015.5646,647.44258Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#3f3d56"
          />
          <rect
            x="573.5064"
            y="213.83697"
            width="193.54781"
            height="186.42335"
            rx="3.56223"
            fill="#e6e6e6"
          />
          <path
            d="M328.43542,254.187a120.05771,120.05771,0,0,1-1.38984,25.0173s-9.729,22.2376,1.38984,31.96655S360.402,281.984,360.402,281.984c-1.44213-8.63449-2.27341-16.75137,0-22.23758Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#ffb8b8"
          />
          <path
            d="M343.72378,526.59767v30.57671s-4.16956,56.98385,0,70.88235l-1.38986,26.40716h15.28836l4.16955-31.96656s12.50865-40.30565,8.3391-65.32295l2.7797-30.57671Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#ffb8b8"
          />
          <path
            d="M321.48617,526.59767v30.57671s4.16955,56.98385,0,70.88235l1.38985,26.40716H307.58767l-4.16955-31.96656s-12.50865-40.30565-8.3391-65.32295l-2.7797-30.57671Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#ffb8b8"
          />
          <path
            d="M286.045,411.935s-8.3391,52.81431-2.7797,83.391,5.5594,40.30566,5.5594,40.30566l34.74626-1.38985L333.2999,477.258l8.3391,58.37371,41.69551-6.94925s0-44.47521,1.38985-54.20416,1.38985-65.323,1.38985-65.323Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <path
            d="M360.402,654.46389s-15.28835-9.72895-22.23761,0v16.6782s-5.5594,12.50865,13.89851,9.72895,12.50865-12.50865,12.50865-12.50865Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <path
            d="M304.808,654.46389s15.28835-9.72895,22.2376,0v16.6782s5.5594,12.50865-13.8985,9.72895-12.50865-12.50865-12.50865-12.50865Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <circle cx="189.18227" cy="37.24875" r="22.2376" fill="#ffb8b8" />
          <path
            d="M336.77452,298.66224l-9.5603-22.49362-9.8976,4.42557L304.808,352.8664l1.38985,69.49251s63.93311-2.7797,72.27221,1.38985-9.72895-136.20532-9.72895-136.20532l-8.3391-10.402Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#8c45a0"
          />
          <path
            d="M328.72359,268.08554s-21.13592,5.5594-21.13592,13.8985c0,0-20.84775,4.16955-20.84775,8.3391s-1.38985,109.79817-1.38985,109.79817-12.50865,23.62745-2.7797,43.08535l-1.38985,11.1188,27.797,2.7797,19.4579-170.95157Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <path
            d="M358.724,268.08554s21.13592,5.5594,21.13592,13.8985c0,0,20.84775,4.16955,20.84775,8.3391s1.38985,109.79817,1.38985,109.79817,12.50865,23.62745,2.7797,43.08535l1.38985,11.1188-27.797,2.7797-19.4579-170.95157Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <path
            d="M364.57153,216.66108s1.38985-5.5594-5.5594-2.7797c0,0-8.3391-9.72895-16.67821-2.7797,0,0-16.6782-2.7797-16.6782,11.1188s-.78617,18.48769-.78617,18.48769,4.95572-12.92829,14.68467-11.53844c5.94547.84936,9.2957.14156,11.00227-.5374a8.34194,8.34194,0,0,1,5.82353-.2762,9.06027,9.06027,0,0,1,5.41181,4.98315,41.764,41.764,0,0,0,3.01261,5.69795,35.28567,35.28567,0,0,1,3.91266,7.78426h0l2.80368-16.26192s1.38985-8.3391-2.7797-11.1188C368.74108,219.44078,370.13093,215.27123,364.57153,216.66108Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <rect
            x="255.25115"
            y="244.93126"
            width="374.28889"
            height="121.93548"
            fill="#8c45a0"
          />
          <path
            d="M261.02769,435.56248s-8.3391,31.96656,4.16955,29.18686,9.72895-30.57671,9.72895-30.57671Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#ffb8b8"
          />
          <path
            d="M426.41986,435.56248s8.3391,31.96656-4.16955,29.18686-9.72895-30.57671-9.72895-30.57671Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#ffb8b8"
          />
          <path
            d="M293.68917,290.32314l-3.8363-2.98642s-4.5028.20672-5.89265,2.98642-23.62746,72.27221-23.62746,72.27221-6.94925,36.13611-2.7797,58.37371l1.38985,16.6782h19.45791L277.011,411.24011l13.8985-52.81431Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <path
            d="M393.75838,290.32314l3.8363-2.98642s4.5028.20672,5.89265,2.98642,23.62746,72.27221,23.62746,72.27221,6.94925,36.13611,2.7797,58.37371l-1.38985,16.6782H409.04673l1.38985-26.40715-13.8985-52.81431Z"
            transform="translate(-157.32121 -208.59918)"
            fill="#2f2e41"
          />
          <rect
            x="327.88228"
            y="260.30573"
            width="21.20617"
            height="21.20617"
            fill="#fff"
          />
          <rect
            x="386.19925"
            y="269.84851"
            width="170.70967"
            height="2.12062"
            fill="#fff"
          />
          <rect
            x="327.88228"
            y="295.29591"
            width="21.20617"
            height="21.20617"
            fill="#fff"
          />
          <rect
            x="386.19925"
            y="304.83869"
            width="170.70967"
            height="2.12062"
            fill="#fff"
          />
          <rect
            x="327.88228"
            y="330.28609"
            width="21.20617"
            height="21.20617"
            fill="#fff"
          />
          <rect
            x="386.19925"
            y="339.82887"
            width="170.70967"
            height="2.12062"
            fill="#fff"
          />
        </svg>
      </div>
    </main>
    <section className="container mx-auto flex flex-wrap mt-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </Layout>
)

export default IndexPage
