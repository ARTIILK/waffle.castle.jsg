import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Review {
    id: number;
    name: string;
    rating: number;
    text: string;
    created_at: string;
}

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(10);

            if (error) throw error;

            if (data && data.length > 0) {
                setReviews(data);
            } else {
                // Fallback data if no reviews in DB
                setReviews([
                    {
                        id: 1,
                        name: "Priya Das",
                        rating: 5,
                        text: "The best waffles in Jharsuguda! The Nutella waffle is absolutely divine. A must-visit place for dessert lovers.",
                        created_at: "2 days ago"
                    },
                    {
                        id: 2,
                        name: "Rahul Sharma",
                        rating: 5,
                        text: "Amazing ambiance and even better shakes. The service is quick and the staff is very polite. Highly recommended!",
                        created_at: "1 week ago"
                    }
                ]);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            // Fallback on error
            setReviews([
                {
                    id: 1,
                    name: "Priya Das",
                    rating: 5,
                    text: "The best waffles in Jharsuguda! The Nutella waffle is absolutely divine. A must-visit place for dessert lovers.",
                    created_at: "2 days ago"
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (reviews.length === 0) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [reviews]);

    const nextReview = () => {
        if (reviews.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        if (reviews.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    if (loading) return <div className="py-20 text-center">Loading reviews...</div>;
    if (reviews.length === 0) return null;

    return (
        <section id="reviews" className="py-20 bg-brand-cream relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">Customer Love</h2>
                    <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our sweet customers have to say about their Waffle Castle experience.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20">
                        <button
                            onClick={prevReview}
                            className="p-3 rounded-full bg-white shadow-lg text-brand-brown hover:bg-brand-orange hover:text-white transition-colors duration-300"
                            aria-label="Previous review"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20">
                        <button
                            onClick={nextReview}
                            className="p-3 rounded-full bg-white shadow-lg text-brand-brown hover:bg-brand-orange hover:text-white transition-colors duration-300"
                            aria-label="Next review"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="relative h-[300px] md:h-[250px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="absolute w-full"
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mx-4 relative">
                                    <Quote className="absolute top-6 left-6 text-brand-yellow/20 w-16 h-16" />

                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={20}
                                                    className={`${i < reviews[currentIndex].rating
                                                            ? "text-brand-yellow fill-brand-yellow"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl text-brand-dark mb-8 italic leading-relaxed">
                                            "{reviews[currentIndex].text}"
                                        </p>

                                        <div className="flex flex-col items-center">
                                            <h4 className="text-lg font-bold text-brand-brown">{reviews[currentIndex].name}</h4>
                                            <span className="text-sm text-gray-500">
                                                {new Date(reviews[currentIndex].created_at).toLocaleDateString() === 'Invalid Date'
                                                    ? reviews[currentIndex].created_at
                                                    : new Date(reviews[currentIndex].created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-brand-orange w-8" : "bg-gray-300 hover:bg-brand-orange/50"
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
