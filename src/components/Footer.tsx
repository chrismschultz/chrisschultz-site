const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8"> {/* Increased space-x */}
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/chrismschultz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 brightness-0 invert"
                aria-label="LinkedIn"
              >
                <img 
                  src="/linkedin-icon.png" 
                  alt="LinkedIn" 
                  className="h-8 w-8"
                />
              </a>
              
              <a 
                href="https://github.com/chrismschultz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 brightness-0 invert"
                aria-label="GitHub"
              >
                <img 
                  src="/github-icon.png" 
                  alt="GitHub" 
                  className="h-8 w-8"
                />
              </a>
              
              {/* Email */}
              <a 
                href="mailto:cschultz5923@gmail.com"
                className="transition-transform hover:scale-110 brightness-0 invert"
                aria-label="Email"
              >
                <img 
                  src="/email-icon.png" 
                  alt="Email" 
                  className="h-8 w-8"
                />
              </a>
            </div>
            
            <p className="mt-6 text-center text-sm text-gray-400">
              Chris Schultz © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </footer>
      );
}

export {
    Footer
}