import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HomePage from '../pages/home'

export default function CppCompilerLoading() {
  const [loading, setLoading] = useState(true)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  
  // C++ code to simulate typing
  const codeLines = [
    '#include <iostream>',
    'using namespace std;',
    '',
    'int main() {',
    '  cout << "Loading portfolio..." << endl;',
    '  ',
    '  // Initialize components',
    '  Portfolio portfolio;',
    '  portfolio.load();',
    '  ',
    '  return 0;',
    '}'
  ]
  
  // Current line being typed
  const currentLine = codeLines[textIndex] || ''
  // Text displayed so far
  const displayText = codeLines.slice(0, textIndex).concat(currentLine.substring(0, charIndex))
  
  useEffect(() => {
    // Complete loading after all text is typed
    if (textIndex >= codeLines.length) {
      const finalTimer = setTimeout(() => {
        setLoading(false)
      }, 800)
      return () => clearTimeout(finalTimer)
    }
    
    // Type current character
    if (charIndex < currentLine.length) {
      const charTimer = setTimeout(() => {
        setCharIndex(charIndex + 1)
      }, 1 + Math.random() * 5) // Slightly randomized typing speed
      return () => clearTimeout(charTimer)
    }
    
    // Move to next line
    if (textIndex < codeLines.length) {
      const lineTimer = setTimeout(() => {
        setTextIndex(textIndex + 1)
        setCharIndex(0)
      }, 200)
      return () => clearTimeout(lineTimer)
    }
  }, [textIndex, charIndex, currentLine.length, codeLines.length])
  
  if (!loading) {
    return (
     <HomePage/>
    )
  }
  
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Compiler window */}
      <motion.div 
        className="w-full max-w-lg bg-white border border-black rounded shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Compiler header */}
        <div className="bg-white border-b border-black px-4 py-2 flex items-center justify-between">
          <div className="text-black font-mono text-sm">portfolio.cpp</div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full border border-black"></div>
            <div className="w-3 h-3 rounded-full border border-black"></div>
            <div className="w-3 h-3 rounded-full border border-black"></div>
          </div>
        </div>
        
        {/* Code editor */}
        <div className="bg-white p-4 font-mono text-sm h-64 overflow-hidden">
          <div className="h-full overflow-y-auto">
            {displayText.map((line, index) => (
              <div key={index} className="flex">
                <div className="text-gray-500 w-8 flex-shrink-0 text-right pr-2">
                  {index + 1}
                </div>
                <div className="text-black whitespace-pre">{line}</div>
              </div>
            ))}
            
            {/* Blinking cursor */}
            {textIndex < codeLines.length && (
              <motion.span
                className="inline-block w-2 h-4 bg-black ml-1 relative -top-4"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>
        
        {/* Compiler status bar */}
        <div className="bg-white border-t border-black px-4 py-2 flex items-center justify-between">
          <div className="text-green-600 font-mono text-xs">
            {textIndex >= codeLines.length ? 'Compiling: 100%' : `Typing: ${Math.floor((textIndex / codeLines.length) * 100)}%`}
          </div>
          <div className="text-black font-mono text-xs">
            {Math.floor(Math.random() * 100)}ms
          </div>
        </div>
      </motion.div>
      
      {/* Loading indicator */}
      {textIndex >= codeLines.length && (
        <motion.div
          className="mt-6 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-black font-mono text-sm mb-2">Compiling...</div>
          <div className="w-32 h-px bg-gray-200 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}