import { Award, GraduationCap, Briefcase, Pencil, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

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

  const FinderCard = ({ item, icon, onClick }: { item: Achievement; icon: JSX.Element; onClick: () => void }) => (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-[#00F5D4]/50"
      style={{
        background: "rgba(11,17,32,0.75)",
        border: "1px solid rgba(56,189,248,0.18)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Finder-style header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#050816]/80 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] font-mono text-white/40 truncate">{item.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 30)}.cert</span>
      </div>
      <div className="p-6">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#00F5D4] mb-4"
          style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)", boxShadow: "0 0 18px rgba(0,245,212,0.2)" }}
          whileHover={{ rotate: -6, scale: 1.1 }}
        >
          {icon}
        </motion.div>
        <h4 className="text-base font-semibold text-white mb-1.5 leading-tight group-hover:text-[#00F5D4] transition-colors">
          {item.title}
        </h4>
        <p className="text-xs font-mono text-[#38BDF8] mb-3">{item.institution}</p>
        <p className="text-[11px] font-mono text-white/40">↗ open details</p>
      </div>
    </motion.div>
  );

  return (
    <section
      id="achievements"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #0B1120 100%)" }}
    >
      {/* floating particles */}
      {[...Array(22)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00F5D4]/60"
          style={{ left: `${(i * 47) % 100}%`, top: `${(i * 29) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.25 }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// ACHIEVEMENTS.LS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto" />
          </motion.div>

          {[
            { label: "Certifications", items: certifications, type: "certification", icon: <Award className="h-6 w-6" /> },
            { label: "Workshops", items: workshops, type: "workshop", icon: <GraduationCap className="h-6 w-6" /> },
            { label: "Internships", items: internships, type: "internship", icon: <Briefcase className="h-6 w-6" /> },
          ].map((group) => (
            <div key={group.label} className="mb-14 last:mb-0">
              <motion.h3
                className="text-2xl font-bold text-white mb-6 font-mono"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#00F5D4]">›</span> {group.label}
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((it, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <FinderCard item={it} icon={group.icon} onClick={() => setSelectedItem({ type: group.type, index })} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}


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
