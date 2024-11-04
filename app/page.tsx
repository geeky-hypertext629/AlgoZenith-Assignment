import { Bell, Star, Clipboard, ChevronDown, ChevronUp, Clock, Code2, LayoutDashboard, Play, Copy, Menu, BriefcaseBusiness, NotepadText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import lightbulb from "./assets/lightbulb.png";
import users from "./assets/users.png";
import leaderboard from "./assets/leaderboard.png";
import article from "./assets/article.png";
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className=" flex items-center gap-2 p-4 border-b cursor-pointer">
        <Menu className="w-4 h-4" />
          <h1 className="text-xl font-bold">AlgoZenith</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Image alt="Picture of the author" src={lightbulb} className="w-4 h-4" />
            Learn
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
          <Image alt="Picture of users" src={users} className="w-4 h-4" />
            Forums
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 bg-primary/5">
            <Clipboard className="w-4 h-4" />
            Upskill
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
          <Image alt="Picture of users" src={leaderboard} className="w-4 h-4" />
            Contest
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Star className="w-4 h-4" />
            Leaderboard
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          <Tabs defaultValue="material" className="mb-6">
            <TabsList>
              <TabsTrigger value="sessions" className="gap-2">
                <NotepadText className="w-4 h-4" />
                Mentor Sessions
              </TabsTrigger>
              <TabsTrigger value="material" className="gap-2">
                <BriefcaseBusiness className="w-4 h-4" />
                Learning Material
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-6">
            {/* Chapters */}
            <div className="w-64 space-y-2">
              {[1, 2, 3, 4, 5].map((chapter) => (
                <div
                  key={chapter}
                  className={`p-3 rounded-lg flex gap-16 ${
                    chapter === 1 ? "border-2 border-yellow-500" : "hover:bg-secondary"
                  }`}
                >
                  <h3 className="font-medium">Chapter {chapter}</h3>
                  {chapter==1 && (<div className="flex items-center gap-2 text-[#17384D] ">
                      <Clock className="w-4 h-4" />
                      02:00:00
                    </div>)}
                </div>
              ))}
            </div>

            {/* Course Content */}
            <div className="flex-1 border rounded-lg p-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#EFF5FF]">
                  <h2 className="text-lg  text-[#17384D]">PART 1</h2>
                  <div className="flex items-center gap-4 text-[#17384D]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      02:00:00
                    </div>
                    <div className="flex items-center gap-2">
                    <Image alt="Picture of users" src={leaderboard} className="w-4 h-4" />
                    Medium
                    </div>
                    <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4" />
                    5
                    </div>
                    <ChevronUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-[55%]">
                <h3 className="text-xl font-bold">Lorem Ipsum Dolor Sit Amet</h3>
                <span className="text-sm text-muted-foreground bg-[#EFF5FF] border-[1.5px] px-2 py-1 border-[#99E4FF]">45% Completed</span>
                </div>
                <Progress value={45} className="h-2" />

                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-red-500" />
                      <span>Video 1</span>
                    </div>
                    <span>10:00</span>
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Image src={article} alt="Text for the Article menu" className="w-4 h-4" />
                      <span>Article 1</span>
                    </div>
                    <span>10:00</span>
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2">
                    <Image src={article} alt="Text for the Article menu" className="w-4 h-4" />
                      <span>Quiz 1</span>
                    </div>
                    <span>10:00</span>
                  </div>
                  <div className="flex items-center justify-between p-4 hover:bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      <span>Coding Exercise 1</span>
                    </div>
                    <span>10:00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg  text-[#17384D]">PART 2</h2>
                  <div className="flex items-center gap-4 text-[#17384D]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      02:00:00
                    </div>
                    <div className="flex items-center gap-2">
                    <Image alt="Picture of users" src={leaderboard} className="w-4 h-4" />
                    Medium
                    </div>
                    <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4" />
                    12
                    </div>
                    {/* <span className="text-sm">Medium</span>
                    <span className="text-sm">12</span> */}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-[55%]">
                <h3 className="text-xl font-bold">Lorem Ipsum Dolor Sit Amet</h3>
                <span className="text-sm text-muted-foreground bg-[#EFF5FF] border-[1.5px] px-2 py-1 border-[#99E4FF]">20% Completed</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg  text-[#17384D]">PART 3</h2>
                  <div className="flex items-center gap-4 text-[#17384D]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      02:00:00
                    </div>
                    <div className="flex items-center gap-2">
                    <Image alt="Picture of users" src={leaderboard} className="w-4 h-4" />
                    Medium
                    </div>
                    <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4" />
                    12
                    </div>
                    {/* <span className="text-sm">Medium</span> */}
                    {/* <span className="text-sm">12</span> */}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center gap-[55%]">
                <h3 className="text-xl font-bold">Lorem Ipsum Dolor Sit Amet</h3>
                <span className="text-sm text-muted-foreground bg-[#EFF5FF] border-[1.5px] px-2 py-1 border-[#99E4FF]">0% Completed</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}