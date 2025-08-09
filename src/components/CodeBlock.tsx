import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  language: 'python' | 'javascript';
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);
  const [selectedLang, setSelectedLang] = useState(language);

  const codeExamples = {
    python: `import replicate

# Run a model
output = replicate.run(
    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
    input={"prompt": "a photo of an astronaut riding a horse"}
)

# Deploy your own model
deployment = replicate.deployments.create(
    name="my-app-image-generator",
    model="user/my-model",
    version="5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa"
)`,
    javascript: `import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Run a model
const output = await replicate.run(
  "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
  {
    input: {
      prompt: "a photo of an astronaut riding a horse"
    }
  }
);

// Deploy your own model
const deployment = await replicate.deployments.create({
  name: "my-app-image-generator",
  model: "user/my-model",
  version: "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa"
});`
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/50">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedLang('python')}
            className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
              selectedLang === 'python'
                ? 'bg-violet-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Python
          </button>
          <button
            onClick={() => setSelectedLang('javascript')}
            className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
              selectedLang === 'javascript'
                ? 'bg-violet-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            JavaScript
          </button>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          aria-label="Copy code to clipboard"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-slate-300">
          <code>{codeExamples[selectedLang]}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;