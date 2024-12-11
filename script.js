// Initialize Supabase
const supabaseUrl = 'https://vhscabnwpirhwcdqisji.supabase.co/'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoc2NhYm53cGlyaHdjZHFpc2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MjI4ODksImV4cCI6MjA0OTQ5ODg4OX0.JYKRajW7PE3ccoWZhaDZ-d66DzvrWewGcsYWggtLFSI'; // Replace with your Supabase Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log(SUPABASE_URL, SUPABASE_KEY);

// Handle Contact Form Submission
document.getElementById('send-message').addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const { data, error } = await supabase
            .from('contact_info') // Replace with your table name
            .insert([{ name, email, message }]);

        if (error) {
            console.error('Error submitting message:', error);
            alert('There was an error submitting your message. Please try again.');
        } else {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Clear the form
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
});

// Handle "Learn More" Clicks
document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const product = event.target.getAttribute('data-product');
        if (product) {
            // Open a new page or display details dynamically
            window.location.href = `product-details.html?product=${encodeURIComponent(product)}`;
        }
    });
});
