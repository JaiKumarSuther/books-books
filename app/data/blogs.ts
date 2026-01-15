export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
}

export const blogs: BlogPost[] = [
    {
        id: "study-tips-for-success",
        title: "Top 10 Study Tips for Academic Success",
        excerpt: "Discover the best ways to improve your focus, manage your time, and get better grades this semester with these proven strategies.",
        content: `
            <p className="mb-4">Achieving academic success isn't just about intelligence; it's about strategy, consistency, and efficient study habits. Whether you're in high school or university, mastering these skills can significantly boost your performance.</p>
            
            <h3 className="text-xl font-bold mb-2">1. Create a Study Schedule</h3>
            <p className="mb-4">Consistency is key. set aside specific times each day for studying different subjects. This helps condition your brain to focus.</p>

            <h3 className="text-xl font-bold mb-2">2. Organize Your Study Space</h3>
            <p className="mb-4">A cluttered desk leads to a cluttered mind. Ensure your workspace is clean, well-lit, and free from distractions. Using organizers for your stationery can make a huge difference.</p>

            <h3 className="text-xl font-bold mb-2">3. Take Regular Breaks</h3>
            <p className="mb-4">The Pomodoro technique suggests studying for 25 minutes and taking a 5-minute break. This keeps your mind fresh and prevents burnout.</p>

            <p>Implement these tips starting today, and watch your productivity soar!</p>
        `,
        image: "/blog-study-tips.png",
        date: "Oct 12, 2023",
        category: "Study Tips"
    },
    {
        id: "essential-school-supplies",
        title: "Essential School Supplies Checklist",
        excerpt: "Don't miss a thing! Here is the ultimate checklist for school supplies to ensure you are fully prepared for the upcoming academic year.",
        content: `
            <p className="mb-4">Heading back to school is exciting, but forgetting essential supplies can be stressful. We've compiled the ultimate checklist to ensure you have everything you need.</p>
            
            <h3 className="text-xl font-bold mb-2">The Basics</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>Notebooks (ruled and unruled)</li>
                <li>Pens (Blue, Black, and Red)</li>
                <li>Pencils and Erasers</li>
                <li>Highlighters</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">Math & Science</h3>
            <p className="mb-4">Don't forget your geometry box, scientific calculator, and graph paper. These are often required for higher-grade levels.</p>

            <p>Check out our "Back to School" bundle offers to get all these items at a discounted price!</p>
        `,
        image: "/blog-school-supplies.png",
        date: "Sep 05, 2023",
        category: "Guides"
    },
    {
        id: "benefits-of-extra-curriculars",
        title: "Why Extra-Curriculars Matter",
        excerpt: "Beyond the classroom: How sports, arts, and clubs contribute to a well-rounded education and personal growth.",
        content: `
            <p className="mb-4">Education is more than just grades. Participating in extra-curricular activities plays a crucial role in personal development.</p>
            
            <h3 className="text-xl font-bold mb-2">Building Soft Skills</h3>
            <p className="mb-4">Clubs and sports teams teach teamwork, leadership, and communication skills that are invaluable in the real world.</p>

            <h3 className="text-xl font-bold mb-2">Stress Relief</h3>
            <p className="mb-4">Engaging in hobbies like painting or playing football provides a healthy outlet for stress, leading to better mental health.</p>

            <p>Encourage balance in your student life by picking at least one activity you love outside of academics.</p>
        `,
        image: "/blog-happy-students.png",
        date: "Aug 20, 2023",
        category: "Lifestyle"
    }
];
