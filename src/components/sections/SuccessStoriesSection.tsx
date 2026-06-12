import { motion } from "framer-motion";
import { TrendingDown, Zap, Globe, Sparkles } from "lucide-react";

const stories = [
  {
    metric: "30%",
    label: "Reduction",
    title: "SAP S/4HANA Transformation",
    description: "Reduced operational costs and optimized resource utilization across business departments.",
    icon: TrendingDown,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    metric: "50%",
    label: "Acceleration",
    title: "SAP BTP Innovation Project",
    description: "Accelerated enterprise application development and simplified system integrations.",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    metric: "Global",
    label: "Deployment",
    title: "Global Rollout Services",
    description: "Successfully deployed template-based SAP systems across multiple countries and divisions.",
    icon: Globe,
    color: "text-[#0076d6]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }
];

export const SuccessStoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f4f6f8] border-t border-b border-[#e5e5e5] font-sans antialiased text-[#1d1d1d]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold text-[#0076d6] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1d1d1d]">
            Delivering Measurable Results
          </h2>
          <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
            See how our enterprise SAP consulting services drive process efficiency and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white border border-[#d2d2d2] p-8 flex flex-col justify-between hover:shadow-lg transition-all rounded-none text-left group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${story.bgColor} ${story.color} border ${story.borderColor} flex items-center justify-center rounded-none`}>
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Metric Display */}
                  <div className="space-y-1">
                    <div className={`text-4xl md:text-5xl font-light tracking-tight ${story.color}`}>
                      {story.metric}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#555555]">
                      {story.label}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-[#1d1d1d] group-hover:text-[#0076d6] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
