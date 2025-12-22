import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { MENU_ITEMS } from '../data/menuData';

const ReviewPage: React.FC = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [text, setText] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const { error } = await supabase
                .from('reviews')
                .insert([{
                    name,
                    rating,
                    text,
                    item_ordered: selectedItem || null
                }]);

            if (error) throw error;

            setMessage({ type: 'success', text: 'Thank you for your review!' });
            setName('');
            setRating(5);
            setText('');
            setSelectedItem('');
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage({ type: 'error', text: 'Failed to submit review. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-cream pt-24 pb-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-brand-brown mb-6 text-center">
                    Share Your Experience
                </h1>
                <p className="text-brand-dark/70 text-center mb-8">
                    We'd love to hear about your visit to Waffle Castle!
                </p>

                {message && (
                    <div
                        className={`p-4 rounded-lg mb-6 text-center font-medium ${message.type === 'success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-brand-brown mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border-2 border-brand-orange/20 focus:border-brand-orange focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="item" className="block text-sm font-bold text-brand-brown mb-2">
                            What did you order? (Optional)
                        </label>
                        <select
                            id="item"
                            value={selectedItem}
                            onChange={(e) => setSelectedItem(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border-2 border-brand-orange/20 focus:border-brand-orange focus:outline-none transition-colors bg-white"
                        >
                            <option value="">Select an item...</option>
                            {MENU_ITEMS.map((item) => (
                                <option key={item.id} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-brand-brown mb-2">
                            Rating
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        size={32}
                                        className={`${star <= rating
                                            ? 'text-brand-yellow fill-brand-yellow'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="review" className="block text-sm font-bold text-brand-brown mb-2">
                            Your Review
                        </label>
                        <textarea
                            id="review"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border-2 border-brand-orange/20 focus:border-brand-orange focus:outline-none transition-colors resize-none"
                            placeholder="Tell us what you liked..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-brand-brown transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            'Submitting...'
                        ) : (
                            <>
                                Submit Review <Send size={20} />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default ReviewPage;
