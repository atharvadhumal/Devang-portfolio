import React from 'react';

const projects = [
  {
    title: 'Netflix Data Analysis',
    description: 'Analyzed user ratings, genre popularity, and content trends using Python.',
    tools: 'Python, Pandas, Matplotlib, Seaborn',
    category: 'Data Analysis',
    icon: '📊'
  },
  {
    title: 'Website Traffic Insights Analysis',
    description: 'GA4 traffic insights for peak hours, channels, and session behavior.',
    tools: 'Python, Pandas, Matplotlib',
    category: 'Web Analytics',
    icon: '🌐'
  },
  {
    title: 'Diwali Sales Analysis',
    description: 'Sales trends among married women in tech-heavy states.',
    tools: 'Python, Pandas, Seaborn',
    category: 'Sales Analytics',
    icon: '🛍️'
  },
  {
    title: 'Power BI SuperStore Dashboard',
    description: 'Dynamic visuals for KPIs, regions, categories, and shipping.',
    tools: 'Power BI, Power Query, DAX',
    category: 'Business Intelligence',
    icon: '📈'
  },
  {
    title: 'Mobile Sales Dashboard (Power BI)',
    description: 'Visualize brand-wise city performance and YoY sales.',
    tools: 'Power BI, DAX',
    category: 'Business Intelligence',
    icon: '📱'
  },
  {
    title: 'Ecommerce Sales Dashboard (Power BI)',
    description: 'Mapped profit trends and customer behavior.',
    tools: 'Power BI, Power Query',
    category: 'Business Intelligence',
    icon: '🛒'
  },
  {
    title: 'Excel Sales Dashboard (2014–2017)',
    description: 'Sales insights with monthly & rep-wise performance.',
    tools: 'Excel, PivotTables, Slicers',
    category: 'Excel Analytics',
    icon: '📊'
  },
  {
    title: 'Sales Executive Performance (Excel)',
    description: 'Track deals and KPI across Indian regions.',
    tools: 'Excel, Charts',
    category: 'Excel Analytics',
    icon: '👥'
  },
  {
    title: 'Vrinda Store Sales Dashboard (Excel – 2022)',
    description: 'Mapped preferences of women aged 30–49 across 3 states.',
    tools: 'Excel, PivotTables',
    category: 'Excel Analytics',
    icon: '🏪'
  }
];

function Projects() {
  return (
    <div id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            MY PROJECTS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of data analysis and business intelligence projects showcasing my expertise in transforming raw data into actionable insights.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.split(', ').map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>
              
              {/* Card Border Animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's work together to turn your data into powerful insights that drive business decisions.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get In Touch : +91 93240 03573
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
