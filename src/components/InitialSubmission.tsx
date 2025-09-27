import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, Sparkles } from "lucide-react";

interface InitialSubmissionProps {
  onBack: () => void;
}

const InitialSubmission = ({ onBack }: InitialSubmissionProps) => {
  const [formData, setFormData] = useState({
    teamId: '',
    userId: '',
    title: '',
    description: '',
    pptLink: '',
    jwtToken: ''
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
    
    console.log('Initial Submission:', formData);
    alert('Initial submission successful! 🎉');
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
            <span className="text-transparent bg-gradient-primary bg-clip-text glow-text">
              INITIAL
            </span>
            <span className="text-secondary mx-2">📋</span>
            <span className="text-transparent bg-gradient-accent bg-clip-text glow-text">
              SUBMISSION
            </span>
          </h1>
          <p className="text-muted-foreground font-space text-lg">
            Submit your project details and presentation
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team ID */}
            <div>
              <Label htmlFor="teamId" className="text-primary font-space font-semibold text-sm uppercase tracking-wider">
                Team ID
              </Label>
              <Input
                id="teamId"
                type="text"
                value={formData.teamId}
                onChange={(e) => handleInputChange('teamId', e.target.value)}
                className="mt-2 bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                placeholder="Enter your team ID"
                required
              />
            </div>

            {/* User ID */}
            <div>
              <Label htmlFor="userId" className="text-primary font-space font-semibold text-sm uppercase tracking-wider">
                User ID
              </Label>
              <Input
                id="userId"
                type="text"
                value={formData.userId}
                onChange={(e) => handleInputChange('userId', e.target.value)}
                className="mt-2 bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-primary focus:ring-primary/20"
                placeholder="Enter your user ID"
                required
              />
            </div>
          </div>

          {/* Project Title */}
          <div>
            <Label htmlFor="title" className="text-primary font-space font-semibold text-sm uppercase tracking-wider">
              Project Title
            </Label>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="mt-2 bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-primary focus:ring-primary/20"
              placeholder="Enter your awesome project title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" className="text-primary font-space font-semibold text-sm uppercase tracking-wider">
              Project Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="mt-2 bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-primary focus:ring-primary/20 min-h-[120px] resize-none"
              placeholder="Describe your project, its features, and what makes it special..."
              required
            />
          </div>

          {/* PPT Link */}
          <div>
            <Label htmlFor="pptLink" className="text-secondary font-space font-semibold text-sm uppercase tracking-wider">
              Presentation Link
            </Label>
            <div className="relative mt-2">
              <Input
                id="pptLink"
                type="url"
                value={formData.pptLink}
                onChange={(e) => handleInputChange('pptLink', e.target.value)}
                className="bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-secondary focus:ring-secondary/20 pl-10"
                placeholder="https://your-presentation-link.com"
                required
              />
              <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
            </div>
          </div>

          {/* JWT Token */}
          <div>
            <Label htmlFor="jwtToken" className="text-accent font-space font-semibold text-sm uppercase tracking-wider">
              JWT Token
            </Label>
            <Input
              id="jwtToken"
              type="password"
              value={formData.jwtToken}
              onChange={(e) => handleInputChange('jwtToken', e.target.value)}
              className="mt-2 bg-input/50 border-border/50 text-foreground font-space backdrop-blur-sm focus:border-accent focus:ring-accent/20"
              placeholder="Enter your JWT token"
              required
            />
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
              className="flex-1 px-6 py-4 font-space tracking-wider bg-gradient-primary text-primary-foreground hover:shadow-glow rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  SUBMITTING...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" />
                  SUBMIT PROJECT
                </>
              )}
            </Button>
          </div>
        </motion.form>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InitialSubmission;