'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link as MuiLink
} from '@mui/material';

// Styled Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

// Website Data
const websites: { url: string; description: string; rowClass?: string }[] = [
  { url: "https://duck.ai", description: "DuckDuckGo. Privacy, Simplified." },
  { url: "https://algorithm-visualizer.org", description: "Algorithm Visualizer is an interactive online platform that visualizes algorithms from code." },
  { url: "https://csvistool.com", description: "Official data structures and algorithms visualization tool for CS 1332 at Georgia Tech." },
  { url: "https://algoaction.xyz", description: "Each topic contains a theoretical section designed to provide comprehensive information without overwhelming the learner with unnecessary detail." },
  { url: "https://toptal.com", description: "Learn why the top companies trust Toptal." },
  { url: "https://visualgo.net", description: "VisuAlgo was conceptualised in 2011 by Associate Professor Steven Halim (NUS School of Computing) as a tool to help his students better understand data structures and algorithms, by allowing them to learn the basics on their own and at their own pace. Together with his students from the National University of Singapore, a series of visualizations were developed and consolidated, from simple sorting algorithms to complex graph data structures. Though specifically designed for the use of NUS students taking various data structure and algorithm classes (CS1010/equivalent, CS2040/equivalent (inclusive of IT5003)), CS3230, CS3233, and CS4234), as advocators of online learning, we hope that curious minds around the world will find these visualizations useful as well." },
  { url: "https://cheatography.com", description: "Find thousands of incredible, original programming cheat sheets, all free to download." },
  { url: "https://olmocr.allenai.org", description: "olmOCR is an open-source tool for converting PDFs to text with high accuracy, preserving reading order and supporting tables, equations, and handwriting." },
  { url: "https://thiings.co", description: "A growing collection of 4000+ free 3D icons, generated with AI. Perfect for designers and creative projects." },
  { url: "https://pixie.haus", description: "AI pixel art generator for precise sprite creation. Experience quick outputs, automatic background removal, and seamless pixel handling." },
  { url: "https://animejs.com", description: "A fast and versatile JavaScript animation library" },
  { url: "https://stirlingpdf.io", description: "Stirling PDF" },
  { url: "https://reactbits.dev", description: "An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces." },
  { url: "https://emergent.sh", description: "Build real products with Emergent’s vibe-coding platform. Emergent AI creates production-ready applications from natural language—no developers required." },
  { url: "https://pngimg.com", description: "The largest FREE transparent PNG images clipart catalog for design and web design in best resolution and quality" },
  { url: "https://instructables.com", description: "Instructables is a community for people who like to make things. Come explore, share, and make your next project with us!" },
  { url: "https://topoexport.com", description: "Instantly download precise 2D maps and 3D models for architecture and urban planning. Formats: DXF, IFC, OBJ, STL." },
  { url: "https://snazzymaps.com", description: "Snazzy Maps is a repository of different color schemes for Google Maps aimed towards web designers and developers." },
  { url: "https://staying.fun/en/", description: "专为 Python/JavaScript/C++ 开发者设计的实时可视化平台，核心功能包含：执行流动画演示、变量状态追踪、内存分配监控、代码优化建议。适合教学演示与项目调试。", rowClass: "highlight-yellow" },
  { url: "https://supercook.com", description: "Supercook is a recipe search engine that lets you search by ingredients you have at home. Find thousands of recipes you can make right now with the ingredients you have available at home." },
  { url: "https://bezier.method.ac", description: "A game to help you master the pen tool" },
  { url: "https://playphrase.me", description: "Type any quote, watch the scenes. Search millions of movie clips for language learning and cinema research." },
  { url: "https://seatguru.com", description: "The ultimate source for airplane seating, in-flight amenities, flights shopping and airline information." },
  { url: "https://magichour.com", description: "MagicHour - a Seattle based video production company established in 1992. Need a video? Chances are we’ve been there and shot that and we’ll bring that experience to you at a competitive price." },
  { url: "https://lingohut.com", description: "Discover the easiest way to learn a new language with LingoHut. Our free platform is focused on building your vocabulary and mastering proper pronunciation, making it effortless for you to improve your language skills. Learn from your native language the most essential 50 languages from around the world. LingoHut has everything you need to succeed. Start your language journey today and join millions of satisfied learners!" },
  { url: "https://gamma.app", description: "Gamma is your free-to-use AI design partner for creating effortless presentations, websites, and more. No coding or design skills required." },
  { url: "https://pudding.cool", description: "The Pudding explains ideas with visual essays." },
  { url: "https://kiddoworksheets.com", description: "Kiddo Worksheets has a lot of free educational resources. Get free printable worksheets for Preschool, Kindergarten & Grades from 1 to 5 curriculum." },
  { url: "https://huggingface.co", description: "We’re on a journey to advance and democratize artificial intelligence through open source and open science." },
  { url: "https://magiceraser.pro", description: "With our magic eraser, you can easily remove unwanted objects, people, text, watermarks, and more from your photos online. Try MagicEraser.Pro for free today!" },
  { url: "https://www.3dtuning.com/en-US/", description: "Customize Trucks, Bikes & Auto" },
  { url: "https://stockimg.ai", description: "Stockimg is an all in one design and content creation tool powered by AI. You can easily generate logo, illustration, wallpaper, poster and more." },
  { url: "https://symbolab.com", description: "Symbolab: equation search and math solver - solves algebra, trigonometry and calculus problems step by step" },
  { url: "https://radiocast.co", description: "Discover and listen to radio stations from around the world. More than 8000 stations available." },
  { url: "https://flourish.studio", description: "Bring data to life with Flourish. Create data visualizations and interactive content – no coding needed. Engage, inspire, and tell your best data stories with ease." },
  { url: "https://labs.google/lll/en", description: "Stay up to date with the latest Google AI experiments, innovative tools, and technology. Explore the future of AI responsibly with Google Labs." },
  { url: "https://darebee.com", description: "2300+ home workouts, FREE workouts, exercise programs, monthly challenges and fitness guides.", rowClass: "highlight-green" },
  { url: "https://paperanimator.com", description: "Apply paper effect to any photo in seconds. Customize paper animation and export with green sceen background." },
  { url: "https://meshy.ai", description: "Meshy is an AI 3D model generator that helps to effortlessly transform images and text into 3D models in seconds." },
  { url: "https://myfridgefood.com", description: "Easy recipes using ingredients you already have in the kitchen." },
  { url: "https://readdy.ai", description: "Build your dream websites by talking with AI - no drag-and-drop needed. When you’re happy, publish instantly, or export as clean code or Figma files. Perfect for small teams with limited design resources, or agencies looking to deliver 10x faster." },
  { url: "https://recraft.ai", description: "Premium image generation and editing tool. Store and share your own styles, create, fine-tune, upscale, and perfect your visuals." },
  { url: "https://mult.dev", description: "Travel map animations for video and stories" },
  { url: "https://manualslib.com", description: "Search through 3.000.000 manuals online & and download pdf manuals." },
  { url: "https://autodraw.com", description: "Fast drawing for everyone. AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast." },
  { url: "https://remove.photos", description: "Remove backgrounds from any image automatically in 3 seconds with just one click. Create transparent background, or change to new background. Fast, Free and No Signup!" },
  { url: "https://deepagent.abacus.ai", description: "A god-tier general agent" },
  { url: "https://colorifyai.art", description: "Create high-quality coloring sheets for free with Colorify AI coloring page generator. Spark your kids’ creativity with AI-designed coloring pages." },
  { url: "https://appalchemy.ai", description: "No description" },
  { url: "https://schoolgoat.com", description: "School GOAT will help with all parts of your school work: taking notes for you in class, solving homework problems, creating practice tests and more. Boost your grades and reduce stress with our automated note-taking service." },
  { url: "https://recraft.ai", description: "Premium image generation and editing tool. Store and share your own styles, create, fine-tune, upscale, and perfect your visuals." },
  { url: "https://codedex.io", description: "Codédex is a new way to learn to code for kids and adults alike. Journey through the fantasy land of Python, HTML, CSS, or JavaScript, earn experience points (XP) to unlock new regions, and collect all the badges at your own pace. Start your adventure today." },
  { url: "https://keybr.com", description: "Teaching the world to type at the speed of thought! Typing lessons that work.", rowClass: "highlight-yellow" },
  { url: "https://mount-everest3d.com", description: "Explore Mount Everest with our high-resolution 3D map and discover all routes for trekking and mountaineering." },
  { url: "https://humanbenchmark.com", description: "Brain games and competitions." },
  { url: "https://imageexplainers.com", description: "2025 Copyright | All Rights Reserved." },
  { url: "https://higgsfield.ai", description: "The ultimate AI-powered camera control for creators by creators" },
  { url: "https://enzostvs-deepsite.hf.space", description: "DeepSite is a web development tool that helps you build websites with AI, no code required. Let’s deploy your website with DeepSite and enjoy the magic of AI." },
  { url: "https://formia.so", description: "Stand out with a 3D logo." },
  { url: "https://carcarekiosk.com", description: "Video tutorials for DIY car maintenance with step-by-step directions for free how-to lifehacks for car maintenance. See how to change burnt out bulbs and more!" },
  { url: "https://virtualvacation.us", description: "Explore the world/globe from home with virtualvacation.us! View live footage from different cities, or even take a guessing quiz!" },
  { url: "https://10015.io", description: "All online tools you need in one box for free. Build anything online with “all-in-one toolbox”. All tools are easy-to-use, blazing fast & free." },
  { url: "https://databutton.com", description: "Your hunt for a CTO ends here. Team up with the world’s first reasoning AI developer to build your SaaS product or radically transform how you operate your business." },
  { url: "https://productioncrate.com", description: "Download Professional VFX, Motion Graphics, Music, SFX and 3D Models for your films & videos. Easy-to-Use. Browse 10,000 Assets - Try for Free!" },
  { url: "https://immersity.ai", description: "The AI platform converting images & videos into immersive 3D experiences." },
  { url: "https://tooooools.app", description: "Apply lo-fi effects to your images and videos: dithering, halftone, gradients, patterns and more. Free, no sign-up required." },
  { url: "https://wolframalpha.com", description: "Wolfram|Alpha brings expert-level knowledge and capabilities to the broadest possible range of people—spanning all professions and education levels." },
  { url: "https://typingclub.com", description: "Learn touch typing online using TypingClub’s free typing courses. It includes 650 typing games, typing tests and videos.", rowClass: "highlight-yellow" },
  { url: "https://krea.ai", description: "Krea makes generative AI intuitive. Generate, edit, and enhance images and videos using powerful AI for free." },
  { url: "https://drivenlisten.com", description: "No description" },
  { url: "https://notta.ai/en", description: "Nottaは最新のAI音声認識エンジンを搭載する高精度な文字起こしサービスです。リアルタイム文字起こしと翻訳機能を備え、また、1度に最長5時間までの音声ファイルを素早くテキスト化が可能。PCで音声変換や編集も気軽に行います。" },
  { url: "https://tabletopy.com", description: "Create immersive environments for Dungeons and Dragons campaigns and other RPG games." },
  { url: "https://geeksforgeeks.org", description: "Your All-in-One Learning Portal. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions." },
  { url: "https://loecsen.com", description: "Loecsen is the method that most closely mimics natural language learning. It offers more intelligence, more freedom, and more efficiency." },
  { url: "https://coddy.tech", description: "Learn code in a fun, effective way with Coddy.Tech – enjoy mastering diverse programming languages daily and build skills with ease, all online!" },
  { url: "https://zoo.dev/text-to-cad", description: "Design StudioGet the full power of a professional CAD platform, enhanced with ML through Text-to-CAD. Zoo Design Studio for desktop is free to download and explore." },
  { url: "https://watabou.github.io", description: "Collection of free map generators for tabletop role-playing games and worldbuilding." },
  { url: "https://edx.org", description: "Discover thousands of offerings — from free courses to full degrees — delivered by world-class partners like Harvard, Google, Amazon and more." },
  { url: "https://quickref.me", description: "Share quick reference and cheat sheet for developers" },
  { url: "https://chefgpt.xyz", description: "Never Worry About What’s for Dinner Again! Simply input the ingredients in your pantry and let ChefGPT generate a delicious recipe for you using AI." },
  { url: "https://vidu.com", description: "Vidu is an AI video generator known for its consistency and smooth 2D animation. Ideal for anime, ads, film, and more, it helps creators and teams effortlessly bring their ideas to life." },
  { url: "https://musclewiki.com", description: "MuscleWiki is a fitness app with a comprehensive exercise library that includes videos and written instructions for over 2000 exercises. With a simple and intuitive bodymap that guides you to exercises for a particular muscle, you can simplify your workout with exercises suitable for beginners, intermediate and advanced fitness enthusiasts.", rowClass: "highlight-green" },
  { url: "https://kittl.com", description: "Kittl is the intuitive design platform for professionals, featuring real-time collaboration, advanced tools, and a vast library of fonts and assets. Design, deliver, and collaborate seamlessly." },
  { url: "https://piccopilot.com", description: "Free Remove Background, AI Background Generator, White & Black Backgrounds, Watermark Removal, AI Fashion Model, Translate Text from Images, and AI Ads Creative Generator." },
  { url: "https://classcentral.com", description: "Class Central aggregates courses from many providers to help you find the best courses on almost any subject, wherever they exist." },
  { url: "https://chunkbase.com", description: "A collection of apps to help you find the best Minecraft seeds, and locate biomes and structures in your world on an interactive map." },
  { url: "https://oldmapsonline.org", description: "The easy-to-use getaway to historical maps in libraries around the world." },
  { url: "https://www.modulify.ai/", description: "No description" },
  { url: "https://iloveimg.com", description: "iLoveIMG is the webapp that lets you modify images in seconds for free. Crop, resize, compress, convert, and more in just a few clicks!" },
  { url: "https://collov.ai", description: "Transform empty spaces into stunning, market-ready homes with our cutting-edge virtual staging AI. Fast, cost-effective, and realistic virtual furniture staging for real estate." },
  { url: "https://lottiefiles.com", description: "Effortlessly bring the smallest, free, ready-to-use motion graphics for the web, app, social, and designs. Create, edit, test, collaborate, and ship Lottie animations in no time!" },
  { url: "https://unstuckstudy.com", description: "Unstuck transforms your PDFs, PowerPoints, YouTube videos, lectures, textbook, and class notes into trusted study tools." },
  { url: "https://www.startmycar.com/", description: "No description" },
  { url: "https://scribehow.com", description: "Scribe documents your processes for you. Build visual guides with text, links and screenshots instantly." },
  { url: "https://open.edu/openlearn/", description: "The Open University offers flexible full-time and part-time study, supported distance and open learning for undergraduate and postgraduate courses and qualifications." },
  { url: "https://unscreen.com", description: "Remove the background of any video - 100% automatically, online & free! Goodbye Greenscreen. Hello Unscreen." },
  { url: "https://nim.video", description: "Generate videos with state-of-the-art models, templates, and inspiration feed. Text-to-image, image-to-video, restyle, lip sync, upscale, and more" },
  { url: "https://versus.com", description: "Versus is a global data-driven comparison platform, covering over 90 categories. Compare smartphones, cameras, headphones, graphics cards, and much more. With detailed tech specs, data visualizations, and price comparisons, Versus is the best product finder for a wide range of consumer electronics, from smartphones to PC hardware." },
  { url: "https://seostudio.tools", description: "SEOStudio is a cutting-edge, user-friendly online platform that offers comprehensive suite of free SEO, YouTube, Text, Programming, Webmaster, and Miscellaneous tools." },
  { url: "https://create.xyz", description: "Create is your AI agent for turning ideas into apps. Build sites, apps, tools, products and more just by describing what you want" },
  { url: "https://gitdocify.com", description: "Instant, Professional, Code Documentation.Document your code in seconds with AI." },
  { url: "https://sobrief.com", description: "Read any book in 10 minutes. 100% free to read. Fiction and non-fiction summaries. Audio in 40 languages. World’s largest summary catalog. Read Top 100 Books of All Time. Free PDF/EPUB downloads. No sign-up needed." },
  { url: "https://api.nasa.gov", description: "You do not need to authenticate in order to explore the NASA data. However, if you will be intensively using the APIs to, say, support a mobile application, then you should sign up for a NASA developer key." },
];

export default function PowerfulWebPage() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Powerful Websites
      </Typography>
      <Table sx={{ minWidth: 600 }} aria-label="powered websites table">
        <TableHead>
          <TableRow>
            <StyledTableCell><strong>URL</strong></StyledTableCell>
            <StyledTableCell><strong>Description</strong></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {websites.map((site, idx) => (
            <StyledTableRow key={idx} className={site.rowClass || ''}>
              <StyledTableCell component="th" scope="row">
                <MuiLink href={site.url} target="_blank" rel="noopener noreferrer">
                  {site.url}
                </MuiLink>
              </StyledTableCell>
              <StyledTableCell>
                {site.description}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
