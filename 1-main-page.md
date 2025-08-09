Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VAPI - Voice AI agents for developers</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-black text-white min-h-screen">
    <!-- Newsletter Banner -->
    <div class="bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-4 h-4 bg-white rounded-sm"></div>
                <span class="text-sm text-gray-300">Subscribe to Vapi's new newsletter and stay ahead of all the new developments in the Voice AI space.</span>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
            <button class="text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>

    <!-- Header -->
    <header class="border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <nav class="flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <div class="text-xl font-bold">VAPI</div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">WORKFLOWS</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">USE CASES</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">PRICING</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">DOCS</a>
                        <div class="flex items-center space-x-1">
                            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">RESOURCES</a>
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                        <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">CAREERS</a>
                    </div>
                </div>
                <button class="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full text-sm font-medium">
                    OPEN DASHBOARD
                </button>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
        <div class="max-w-7xl mx-auto px-4 py-20">
            <div class="text-center">
                <h1 class="text-6xl md:text-7xl font-light mb-12 leading-tight">
                    Voice AI agents<br>
                    for developers
                </h1>
                
                <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                    <button class="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2">
                        <span>SIGN UP</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <button class="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-full text-sm font-medium flex items-center space-x-2">
                        <span>READ THE DOCS</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                </div>

                <!-- Voice Interface -->
                <div class="mb-20">
                    <div class="bg-gray-100 text-black px-8 py-4 rounded-full inline-flex items-center space-x-3 text-sm font-medium">
                        <span>TALK TO VAPI</span>
                        <div class="grid grid-cols-3 gap-1">
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                            <div class="w-1 h-1 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>

                <!-- Audio Visualizer -->
                <div class="flex items-end justify-center space-x-1 mb-20 h-32">
                    <!-- Left side bars -->
                    <div class="w-2 bg-white rounded-full" style="height: 20px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 40px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 15px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 25px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 35px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 30px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 20px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 45px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 25px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 40px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 30px;"></div>
                    
                    <!-- Center tall bars -->
                    <div class="w-2 bg-white rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 100px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 60px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 95px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 75px;"></div>
                    <div class="w-2 bg-cyan-400 rounded-full" style="height: 80px;"></div>
                    <div class="w-2 bg-green-400 rounded-full" style="height: 65px;"></div>
                    <div class="w-2 bg-white rounded-full" style="height: 90px;"></div>
                    <div class="w-2 bg-purple-400 rounded-full" style="height: 70px;"></div>
                    <div class="w-2 bg-yellow-400 rounded-full" style="height: 85px;"></div>
                    <div class="w-2 bg-cyan-400 