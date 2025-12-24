import { motion } from "motion/react";

const Journey = () => {
  return (
    <section id="journey" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Our Journey_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              We are committed to deliver the digital experience
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#02b0f0] rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xl">2017</span>
              </div>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#02b0f0] to-transparent rounded-full" />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              TECHNOMETRICS was formed in 2017 to identify and meet the needs of
              the rapidly growing enterprises in Bangladesh. Currently, the
              country has a population of 170 million people. An emerging economy
              with immense growth potential and opportunity, there is a unique
              scope for technology based business development.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              TECHNOMETRICS works with a view to helping you to identify
              opportunities to introduce and implement technology solutions that
              bring about abundant savings in cost, efficiency and investment for
              you and your company while enhancing greater security and control.
              We work as the bridge between the customer and the
              supplier/integrator to ensure a seamless transition.
            </p>

            {/* Highlight Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#02b0f0]">2017</h3>
                <p className="text-gray-600 text-sm mt-1">Established</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#02b0f0]">170M+</h3>
                <p className="text-gray-600 text-sm mt-1">Population Served</p>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <h3 className="text-3xl font-bold text-[#02b0f0]">BD</h3>
                <p className="text-gray-600 text-sm mt-1">Bangladesh Based</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
