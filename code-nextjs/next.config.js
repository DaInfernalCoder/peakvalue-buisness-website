const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
  // Exclude supabase functions from build
  webpack: (config, { webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Ignore supabase functions directory  
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /supabase\/functions/,
      })
    );
    
    return config;
  },
};

module.exports = nextConfig;