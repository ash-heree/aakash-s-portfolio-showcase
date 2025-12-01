import { Card } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase, Pencil, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import achievementsBackground from "@/assets/achievements-tech-bg.jpg";

interface Achievement {
  title: string;
  institution: string;
  description: string;
  image: string;
}

const AchievementsSection = () => {
  const [selectedItem, setSelectedItem] = useState<{ type: string; index: number } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<Achievement | null>(null);
  const [certifications, setCertifications] = useState<Achievement[]>([

    {
      title: "Naan Mudhalvan – Microsoft 360 Course",
      institution: "Naan Mudhalvan Initiative",
      description: "Government-supported Microsoft 365 certification program focused on Office 365 and cloud productivity tools.",
      image: "/placeholder.svg",
    },
    {
      title: "Intercollege Event",
      institution: "S.A. Engineering College",
      description: "Participated in technical competitions demonstrating innovation and teamwork.",
      image: "/placeholder.svg",
    },
    {
      title: "Symposium",
      institution: "Prathyusha Engineering College",
      description: "Presented academic insights and technical projects in a college-level symposium.",
      image: "/placeholder.svg",
    },
    {
      title: "Infosys Springboard Course",
      institution: "Infosys",
      description: "Completed foundational courses in Python, web design, and digital tools through Infosys Springboard.",
      image: "/placeholder.svg",
    },
  ]);

  const [workshops, setWorkshops] = useState<Achievement[]>([
    {
      title: "Cyber Security Workshop",
      institution: "Stella Maris College",
      description: "Hands-on session on ethical hacking, online data safety, and cyber threat protection.",
      image: "/placeholder.svg",
    },
    {
      title: "International Workshop on Data Science",
      institution: "SACAS & Brainvision Solutions",
      description: "Focused on Python programming, machine learning basics, and data visualization.",
      image: "/placeholder.svg",
    },
    {
      title: "Mobile Application Development Workshop",
      institution: "Prathyusha Engineering College",
      description: "Learned fundamentals of Android app design and development through live demonstrations.",
      image: "/placeholder.svg",
    },
  ]);

  const [internships, setInternships] = useState<Achievement[]>([
    {
      title: "ICT Virtual Internship – Data Science",
      institution: "ICT Academy",
      description: "Completed a virtual internship with ICT Academy focusing on Python, ML models, and data analysis.",
      image: "/placeholder.svg",
    },
    {
      title: "Machine Learning Internship",
      institution: "Vcodez Company (Online, Ongoing)",
      description: "Currently pursuing an online internship in ML model training, AI automation, and Python scripting.",
      image: "/placeholder.svg",
    },
  ]);

  const getSelectedAchievement = () => {
    if (!selectedItem) return null;
    const { type, index } = selectedItem;
    if (type === "certification") return certifications[index];
    if (type === "workshop") return workshops[index];
    if (type === "internship") return internships[index];
    return null;
  };

  const selectedAchievement = getSelectedAchievement();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (selectedAchievement) {
      setEditedData({ ...selectedAchievement });
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (!selectedItem || !editedData) return;

    const { type, index } = selectedItem;
    if (type === "certification") {
      const updated = [...certifications];
      updated[index] = editedData;
      setCertifications(updated);
    } else if (type === "workshop") {
      const updated = [...workshops];
      updated[index] = editedData;
      setWorkshops(updated);
    } else if (type === "internship") {
      const updated = [...internships];
      updated[index] = editedData;
      setInternships(updated);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editedData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData({ ...editedData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsEditing(false);
    setEditedData(null);
  };

  return (
    <section 
      id="achievements" 
      className="relative py-20 bg-gradient-to-b from-[#0a0f1f]/40 to-[#0a0f1f]/20 backdrop-blur-xl overflow-hidden"
      style={{
        backgroundImage: `url(${achievementsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-16 rounded-full" />

          {/* Certifications Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "certification", index })}
                >
                  <Award className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-white font-medium">
                    {cert.institution}
                  </p>
                  <p className="text-xs text-white mt-3">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Workshops Subsection */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Workshops
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <Card
                  key={index}
                  className="p-6 cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "workshop", index })}
                >
                  <GraduationCap className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {workshop.title}
                  </h4>
                  <p className="text-sm text-white font-medium">
                    {workshop.institution}
                  </p>
                  <p className="text-xs text-white mt-3">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships Subsection */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Internships
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships.map((internship, index) => (
                <Card
                  key={index}
                  className="p-6 cursor-pointer group"
                  onClick={() => setSelectedItem({ type: "internship", index })}
                >
                  <Briefcase className="h-10 w-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {internship.title}
                  </h4>
                  <p className="text-sm text-white font-medium">
                    {internship.institution}
                  </p>
                  <p className="text-xs text-white mt-3">
                    Click to view details
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Modal */}
          <Dialog open={selectedItem !== null} onOpenChange={handleCloseModal}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedAchievement && (
                <>
                  <DialogHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <DialogTitle className="text-2xl font-bold mb-2">
                          {selectedAchievement.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {selectedAchievement.institution}
                        </DialogDescription>
                      </div>
                      {!isEditing && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleEdit}
                          className="ml-2"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </DialogHeader>
                  
                  {!isEditing ? (
                    <div className="space-y-6 mt-4">
                      {/* Certificate Image */}
                      <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border">
                        <img 
                          src={selectedAchievement.image} 
                          alt={selectedAchievement.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          About this Achievement
                        </h4>
                        <p className="text-base leading-relaxed text-card-foreground">
                          {selectedAchievement.description}
                        </p>
                      </div>

                      {/* View Full Certificate Button */}
                      <Button 
                        className="w-full"
                        onClick={() => window.open(selectedAchievement.image, '_blank')}
                      >
                        View Full Certificate
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6 mt-4">
                      {/* Image Upload */}
                      <div>
                        <Label htmlFor="certificate-image" className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                          Certificate Image
                        </Label>
                        <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-border mb-3 relative group">
                          <img 
                            src={editedData?.image || selectedAchievement.image} 
                            alt={selectedAchievement.title}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              Change Image
                            </Button>
                          </div>
                        </div>
                        <Input
                          id="certificate-image"
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full"
                        >
                          Upload New Certificate Image
                        </Button>
                      </div>

                      {/* Description Edit */}
                      <div>
                        <Label htmlFor="description" className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={editedData?.description || ""}
                          onChange={(e) => setEditedData(editedData ? { ...editedData, description: e.target.value } : null)}
                          rows={4}
                          className="w-full"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1"
                          onClick={handleSave}
                        >
                          Save Changes
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1"
                          onClick={handleCancel}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
