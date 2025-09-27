import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, Github, Figma, Rocket } from "lucide-react";

interface FinalSubmissionProps {
  onBack: () => void;
}

const FinalSubmission = ({ onBack }: FinalSubmissionProps) => {
  const [formData, setFormData] = useState({
    githubLink: '',
    finalPptLink: '',
    figmaLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Final Submission:', formData);
    alert('Final submission successful! 🚀 Your project is now complete!');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-space text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-secondary bg-clip-text glow-text">
              FINAL
            </span>
            <span className="text-primary mx-2">🚀</span>
            <span className="text-transparent bg-gradient-accent bg-clip-text glow-text">
              SUBMISSION
            </span>
          </h1>
          <p className="text-muted-foreground font-space text-lg">
            Submit your completed project with all deliverables
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="hackportal-form rounded-2xl p-8 space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* GitHub Link */}
          <div>
            <Label htmlFor="githubLink" className="text-secondary font-space font-semibold text-sm uppercase tracking-wider">
              GitHub Repository
            </Label>
            <div className="relative mt-2">
              <Input
                id="githubLink"
                type="url"
                value={formData.githubLink}
                onChange={(e) => handleInputChange('githubLink', e.target.value)}
                className="bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-secondary focus:ring-secondary/20 pl-10"
                placeholder="https://github.com/your-username/project-repo"
                required
              />
              <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
            </div>
          </div>

          {/* Final PPT Link */}
          <div>
            <Label htmlFor="finalPptLink" className="text-accent font-space font-semibold text-sm uppercase tracking-wider">
              Final Presentation
            </Label>
            <div className="relative mt-2">
              <Input
                id="finalPptLink"
                type="url"
                value={formData.finalPptLink}
                onChange={(e) => handleInputChange('finalPptLink', e.target.value)}
                className="bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-accent focus:ring-accent/20 pl-10"
                placeholder="https://your-final-presentation.com"
                required
              />
              <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-4 h-4" />
            </div>
          </div>

          {/* Figma Link */}
          <div>
            <Label htmlFor="figmaLink" className="text-primary font-space font-semibold text-sm uppercase tracking-wider">
              Figma Design
            </Label>
            <div className="relative mt-2">
              <Input
                id="figmaLink"
                type="url"
                value={formData.figmaLink}
                onChange={(e) => handleInputChange('figmaLink', e.target.value)}
                className="bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-primary focus:ring-primary/20 pl-10"
                placeholder="https://figma.com/your-design-file"
                required
              />
              <Figma className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" />
            </div>
          </div>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="button"
              onClick={onBack}
              className="flex-1 px-6 py-4 font-space tracking-wider bg-muted/50 border-2 border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              BACK TO HOME
            </Button>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 font-space tracking-wider bg-gradient-secondary text-secondary-foreground hover:shadow-glow rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                  LAUNCHING...
                </>
              ) : (
                <>
                  <Rocket className="w-5 h-5 mr-2" />
                  LAUNCH PROJECT
                </>
              )}
            </Button>
          </div>
        </motion.form>

        {/* Success Animation Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Rocket Trail Effect */}
        <motion.div
          className="absolute top-20 right-10 w-2 h-20 bg-gradient-to-t from-transparent to-accent opacity-30"
          animate={{
            height: [20, 40, 20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default FinalSubmission;