document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const sections = document.querySelectorAll('.section');
    const progress = document.querySelector('.progress-bar');
    let currentSection = 0;

    // Update progress bar
    function updateProgress() {
        if (progress) {
            const progressWidth = ((currentSection + 1) / sections.length) * 100;
            progress.style.width = `${progressWidth}%`;
        }
    }

    // Show section
    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            if (i === index) {
                section.classList.add('active');
            }
        });
        updateProgress();
    }

    // Handle next button clicks
    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (currentSection < sections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        });
    });

    // Handle restart button
    document.querySelector('.restart-btn').addEventListener('click', () => {
        currentSection = 0;
        showSection(currentSection);
    });

    // Initialize Chart.js for employment statistics
    const employmentChart = document.getElementById('employmentChart');
    if (employmentChart) {
        new Chart(employmentChart, {
            type: 'line',
            data: {
                labels: ['2023', '2025', '2027', '2029', '2031', '2033'],
                datasets: [{
                    label: 'Number of Air Traffic Controllers',
                    data: [24000, 24300, 24600, 24900, 25200, 25500],
                    borderColor: '#2563eb',
                    tension: 0.1,
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Air Traffic Controller Employment Growth (2023-2033)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Controllers'
                        }
                    }
                }
            }
        });
    }

    // Initialize Timeline.js
    const timelineDiv = document.getElementById('timeline');
    if (timelineDiv) {
        const timelineData = {
            "timeline": {
                "headline": "Future of Air Traffic Control",
                "type": "default",
                "text": "Key developments in Air Traffic Control",
                "date": [
                    {
                        "startDate": "2023",
                        "endDate": "2025",
                        "headline": "Current State",
                        "text": "24,000 controllers in the US, 3% growth projected (2023-2033)",
                        "asset": {
                            "media": "https://via.placeholder.com/400x200",
                            "credit": "FAA"
                        }
                    },
                    {
                        "startDate": "2025",
                        "endDate": "2030",
                        "headline": "NextGen Implementation",
                        "text": "Full implementation of NextGen satellite-based navigation system",
                        "asset": {
                            "media": "https://via.placeholder.com/400x200",
                            "credit": "FAA"
                        }
                    },
                    {
                        "startDate": "2030",
                        "endDate": "2035",
                        "headline": "AI Integration",
                        "text": "Widespread adoption of AI-assisted ATC systems",
                        "asset": {
                            "media": "https://via.placeholder.com/400x200",
                            "credit": "FAA"
                        }
                    },
                    {
                        "startDate": "2035",
                        "endDate": "2040",
                        "headline": "Space Traffic",
                        "text": "Integration of space traffic management",
                        "asset": {
                            "media": "https://via.placeholder.com/400x200",
                            "credit": "FAA"
                        }
                    }
                ]
            }
        };

        const timelineOptions = {
            width: '100%',
            height: '600',
            source: timelineData,
            embedId: 'timeline'
        };

        // Wait for Timeline.js to be available
        if (typeof createStoryJS === 'function') {
            createStoryJS(timelineOptions);
        } else {
            console.error('Timeline.js not loaded properly');
        }
    }

    // Initialize Accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                content.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                content.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Initialize Education Path Timeline
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
        });
    });

    // Initialize everything
    function initializeAll() {
        showSection(currentSection);
    }

    // Start initialization
    initializeAll();
});
