import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight, MapPin, Star, Activity, Search } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Find Local Sports Events",
      description: "Discover and join sports events happening in your area, filtered by your interests and skill level."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Connect with Athletes",
      description: "Build your network with fellow sports enthusiasts and make lasting connections in your community."
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Join Competitions",
      description: "Participate in tournaments and friendly matches to challenge yourself and improve your skills."
    }
  ];

  const popularSports = [
    { name: "Basketball", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" },
    { name: "Soccer", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600" },
    { name: "Tennis", image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=600" },
    { name: "Volleyball", image: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/80"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Play Together,<br />
              <span className="text-blue-400">Grow Together</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join the largest community of sports enthusiasts. Find local games, 
              meet new teammates, and elevate your athletic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all transform hover:scale-105"
              >
                Find Events Near You
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 text-white backdrop-blur-sm font-semibold hover:bg-white/20 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-24 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for sports events..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex-shrink-0">
              <button className="w-full md:w-auto px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Sports Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Sports
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover events in your favorite sports
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSports.map((sport, index) => (
              <Link
                key={index}
                to="/events"
                className="group relative h-64 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{sport.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sports Meetup?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to connect with fellow athletes and enjoy your favorite sports
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-500 mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-300">Events Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-300">Sports Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Create your account now and start discovering sports events near you
          </p>
          <Link
            to="/register"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;