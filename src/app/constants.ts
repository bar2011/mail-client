import { Conversation, FilterGroup } from "./messages/page";

const conversations: Conversation[] = [
  {
    summary: "Project Deadline Extension Request",
    isFinished: false,
    uuid: "conv-001",
    text: [
      {
        author: "John Smith",
        sentDate: new Date("2024-12-10T09:00:00"),
        title: "Request for Project Deadline Extension",
        message:
          "Dear Team, Due to unforeseen circumstances, I'd like to request a one-week extension for the current project. Please let me know if this is possible.",
      },
      {
        author: "Sarah Johnson",
        sentDate: new Date("2024-12-10T11:30:00"),
        title: "Re: Request for Project Deadline Extension",
        message:
          "Hi John, I understand the situation. Let me discuss this with the stakeholders and get back to you.",
      },
    ],
  },
  {
    summary: "New Product Launch Meeting",
    isFinished: true,
    uuid: "conv-002",
    text: [
      {
        author: "Emily Chen",
        sentDate: new Date("2024-12-11T14:00:00"),
        title: "New Product Launch Meeting - Tomorrow",
        message:
          "Hello everyone, This is a reminder that we have our new product launch meeting scheduled for tomorrow at 10 AM in the conference room.",
      },
      {
        author: "Michael Brown",
        sentDate: new Date("2024-12-11T14:15:00"),
        title: "Re: New Product Launch Meeting - Tomorrow",
        message: "Thanks for the reminder, Emily. I'll be there.",
      },
      {
        author: "Lisa Wang",
        sentDate: new Date("2024-12-11T14:30:00"),
        title: "Re: New Product Launch Meeting - Tomorrow",
        message:
          "Emily, can we also discuss the marketing budget during this meeting?",
      },
    ],
  },
  {
    summary: "Quarterly Financial Report",
    isFinished: false,
    uuid: "conv-003",
    text: [
      {
        author: "David Lee",
        sentDate: new Date("2024-12-12T10:00:00"),
        title: "Q4 Financial Report - Draft",
        message:
          "Dear Finance Team, I've attached the draft of our Q4 financial report. Please review and provide your feedback by Friday.",
      },
      {
        author: "Amanda Taylor",
        sentDate: new Date("2024-12-12T11:45:00"),
        title: "Re: Q4 Financial Report - Draft",
        message:
          "David, thanks for sharing. I'll review it today and get back to you with my comments.",
      },
    ],
  },
  {
    summary: "Office Holiday Party Planning",
    isFinished: false,
    uuid: "conv-004",
    text: [
      {
        author: "Jessica Martinez",
        sentDate: new Date("2024-12-13T09:30:00"),
        title: "Holiday Party Planning Committee",
        message:
          "Hi all, We need volunteers for this year's office holiday party planning committee. Please let me know if you're interested in joining.",
      },
      {
        author: "Ryan Thompson",
        sentDate: new Date("2024-12-13T10:15:00"),
        title: "Re: Holiday Party Planning Committee",
        message: "I'd love to help out, Jessica! Count me in.",
      },
    ],
  },
  {
    summary: "New Client Onboarding Process",
    isFinished: true,
    uuid: "conv-005",
    text: [
      {
        author: "Olivia Wilson",
        sentDate: new Date("2024-12-14T13:00:00"),
        title: "Updated Client Onboarding Process",
        message:
          "Team, I've updated our client onboarding process document. Please review and let me know if you have any questions or suggestions.",
      },
      {
        author: "Daniel Kim",
        sentDate: new Date("2024-12-14T14:30:00"),
        title: "Re: Updated Client Onboarding Process",
        message:
          "Thanks, Olivia. The new process looks great. I think this will streamline our onboarding significantly.",
      },
      {
        author: "Sophia Patel",
        sentDate: new Date("2024-12-14T15:45:00"),
        title: "Re: Updated Client Onboarding Process",
        message:
          "Olivia, this is fantastic. Can we schedule a brief meeting to go over the changes with the team?",
      },
    ],
  },
  {
    summary: "IT System Maintenance Notice",
    isFinished: true,
    uuid: "conv-006",
    text: [
      {
        author: "Alex Johnson",
        sentDate: new Date("2024-12-15T08:00:00"),
        title: "Scheduled IT System Maintenance",
        message:
          "Dear All, Please be advised that we will be performing system maintenance this Saturday from 10 PM to 2 AM. Some services may be unavailable during this time.",
      },
      {
        author: "Emma Davis",
        sentDate: new Date("2024-12-15T08:30:00"),
        title: "Re: Scheduled IT System Maintenance",
        message:
          "Alex, will this affect access to our cloud storage? I have some important files I need to work on over the weekend.",
      },
      {
        author: "Alex Johnson",
        sentDate: new Date("2024-12-15T09:15:00"),
        title: "Re: Scheduled IT System Maintenance",
        message:
          "Hi Emma, cloud storage will not be affected. You should be able to access your files without any issues.",
      },
    ],
  },
  {
    summary: "Team Building Event Ideas",
    isFinished: false,
    uuid: "conv-007",
    text: [
      {
        author: "Nathan Lee",
        sentDate: new Date("2024-12-16T11:00:00"),
        title: "Ideas for Next Team Building Event",
        message:
          "Hello team, I'm looking for suggestions for our next team building event. Please share your ideas!",
      },
      {
        author: "Rachel Green",
        sentDate: new Date("2024-12-16T11:45:00"),
        title: "Re: Ideas for Next Team Building Event",
        message:
          "How about an escape room challenge? It's fun and great for problem-solving skills!",
      },
    ],
  },
  {
    summary: "New Hire Announcement",
    isFinished: true,
    uuid: "conv-008",
    text: [
      {
        author: "HR Department",
        sentDate: new Date("2024-12-17T09:00:00"),
        title: "Welcome Our New Team Member",
        message:
          "Please join us in welcoming Jane Doe to our marketing team. Jane brings 5 years of experience in digital marketing and will be starting next Monday.",
      },
      {
        author: "Mark Wilson",
        sentDate: new Date("2024-12-17T09:30:00"),
        title: "Re: Welcome Our New Team Member",
        message: "Welcome aboard, Jane! Looking forward to working with you.",
      },
      {
        author: "Jane Doe",
        sentDate: new Date("2024-12-17T10:15:00"),
        title: "Re: Welcome Our New Team Member",
        message:
          "Thank you all for the warm welcome! I'm excited to join the team and contribute to our projects.",
      },
    ],
  },
  {
    summary: "Budget Approval Request",
    isFinished: false,
    uuid: "conv-009",
    text: [
      {
        author: "Thomas Brown",
        sentDate: new Date("2024-12-18T13:30:00"),
        title: "Approval Needed: Q1 Marketing Budget",
        message:
          "Dear Finance Team, I've attached the proposed Q1 marketing budget for your review and approval. Please let me know if you need any additional information.",
      },
      {
        author: "Linda Chen",
        sentDate: new Date("2024-12-18T15:00:00"),
        title: "Re: Approval Needed: Q1 Marketing Budget",
        message:
          "Thanks, Thomas. I'll review it this afternoon and get back to you with any questions.",
      },
    ],
  },
  {
    summary: "Customer Feedback Survey Results",
    isFinished: true,
    uuid: "conv-010",
    text: [
      {
        author: "Sarah Adams",
        sentDate: new Date("2024-12-19T10:00:00"),
        title: "Customer Satisfaction Survey Results",
        message:
          "Team, I've compiled the results from our recent customer satisfaction survey. Overall, we've seen a 10% improvement in scores compared to last quarter.",
      },
      {
        author: "James Wilson",
        sentDate: new Date("2024-12-19T10:30:00"),
        title: "Re: Customer Satisfaction Survey Results",
        message:
          "Great news, Sarah! Can you share more details about which areas saw the most improvement?",
      },
      {
        author: "Sarah Adams",
        sentDate: new Date("2024-12-19T11:15:00"),
        title: "Re: Customer Satisfaction Survey Results",
        message:
          "Certainly, James. Customer support and product quality received the highest ratings. I'll send out a detailed report this afternoon.",
      },
    ],
  },
  {
    summary: "Office Recycling Initiative",
    isFinished: false,
    uuid: "conv-011",
    text: [
      {
        author: "Green Team",
        sentDate: new Date("2024-12-20T09:00:00"),
        title: "New Office Recycling Program",
        message:
          "Dear colleagues, We're launching a new recycling program next week. You'll find new bins for different types of recyclables throughout the office.",
      },
      {
        author: "Chris Johnson",
        sentDate: new Date("2024-12-20T09:45:00"),
        title: "Re: New Office Recycling Program",
        message:
          "This is a great initiative! Will there be any information sessions on proper recycling practices?",
      },
    ],
  },
  {
    summary: "Annual Performance Review Schedule",
    isFinished: true,
    uuid: "conv-012",
    text: [
      {
        author: "HR Department",
        sentDate: new Date("2024-12-21T11:00:00"),
        title: "Upcoming Annual Performance Reviews",
        message:
          "All employees, please note that annual performance reviews will be conducted from January 15th to February 5th. Your manager will contact you to schedule your review.",
      },
      {
        author: "Emily White",
        sentDate: new Date("2024-12-21T11:30:00"),
        title: "Re: Upcoming Annual Performance Reviews",
        message:
          "Thanks for the heads up. Is there any specific preparation we need to do for the reviews?",
      },
      {
        author: "HR Department",
        sentDate: new Date("2024-12-21T13:00:00"),
        title: "Re: Upcoming Annual Performance Reviews",
        message:
          "Hi Emily, we recommend reviewing your goals from last year and preparing a self-assessment. We'll send out more detailed guidelines next week.",
      },
    ],
  },
  {
    summary: "New Project Kick-off Meeting",
    isFinished: false,
    uuid: "conv-013",
    text: [
      {
        author: "Project Manager",
        sentDate: new Date("2024-12-22T14:00:00"),
        title: "Project Alpha Kick-off Meeting",
        message:
          "Team, we're scheduling the kick-off meeting for Project Alpha next Tuesday at 2 PM. Please confirm your attendance.",
      },
      {
        author: "David Lee",
        sentDate: new Date("2024-12-22T14:30:00"),
        title: "Re: Project Alpha Kick-off Meeting",
        message:
          "I'll be there. Should we prepare anything specific for the meeting?",
      },
    ],
  },
  {
    summary: "Company Newsletter Contributions",
    isFinished: true,
    uuid: "conv-014",
    text: [
      {
        author: "Communications Team",
        sentDate: new Date("2024-12-23T10:00:00"),
        title: "Call for January Newsletter Contributions",
        message:
          "Hi all, we're now accepting submissions for the January company newsletter. If you have any interesting stories or achievements to share, please send them our way by next Friday.",
      },
      {
        author: "Sophie Turner",
        sentDate: new Date("2024-12-23T10:45:00"),
        title: "Re: Call for January Newsletter Contributions",
        message:
          "I'd like to submit an article about our team's recent charity work. What's the word limit?",
      },
      {
        author: "Communications Team",
        sentDate: new Date("2024-12-23T11:30:00"),
        title: "Re: Call for January Newsletter Contributions",
        message:
          "That sounds great, Sophie! We're looking for articles around 300-500 words. Looking forward to your submission!",
      },
    ],
  },
  {
    summary: "Office Closure for Holidays",
    isFinished: true,
    uuid: "conv-015",
    text: [
      {
        author: "Office Management",
        sentDate: new Date("2024-12-24T09:00:00"),
        title: "Holiday Office Closure Reminder",
        message:
          "Reminder: The office will be closed from December 25th to January 1st for the holiday season. We will reopen on January 2nd. Happy holidays, everyone!",
      },
      {
        author: "Michael Chang",
        sentDate: new Date("2024-12-24T09:30:00"),
        title: "Re: Holiday Office Closure Reminder",
        message:
          "Thanks for the reminder. Will there be any staff on call for emergencies?",
      },
      {
        author: "Office Management",
        sentDate: new Date("2024-12-24T10:15:00"),
        title: "Re: Holiday Office Closure Reminder",
        message:
          "Yes, Michael. We'll have a skeleton crew for emergencies. Contact details will be sent in a separate email.",
      },
    ],
  },
  {
    summary: "New Year's Resolution Challenge",
    isFinished: false,
    uuid: "conv-016",
    text: [
      {
        author: "Wellness Committee",
        sentDate: new Date("2024-12-26T11:00:00"),
        title: "Company-wide New Year's Resolution Challenge",
        message:
          "Hello everyone! We're organizing a New Year's Resolution Challenge. Share your professional development goal for the year and we'll check in quarterly on progress. Prizes for the most improved!",
      },
      {
        author: "Lisa Johnson",
        sentDate: new Date("2024-12-26T11:45:00"),
        title: "Re: Company-wide New Year's Resolution Challenge",
        message: "This sounds fun! How do we submit our resolutions?",
      },
    ],
  },
  {
    summary: "Quarterly Sales Report",
    isFinished: true,
    uuid: "conv-017",
    text: [
      {
        author: "Sales Director",
        sentDate: new Date("2024-12-27T14:00:00"),
        title: "Q4 Sales Report - Final Numbers",
        message:
          "Team, I'm pleased to share that we've exceeded our Q4 sales targets by 15%. Great job everyone! Detailed report attached.",
      },
      {
        author: "CEO",
        sentDate: new Date("2024-12-27T15:30:00"),
        title: "Re: Q4 Sales Report - Final Numbers",
        message:
          "Excellent work, team! This is a fantastic way to end the year. Let's discuss strategies to maintain this momentum in Q1",
      },
      {
        author: "Marketing Manager",
        sentDate: new Date("2024-12-27T16:15:00"),
        title: "Re: Q4 Sales Report - Final Numbers",
        message:
          "Congratulations to the sales team! I'd love to feature some of our top-performing products in our next marketing campaign.",
      },
    ],
  },
  {
    summary: "Employee Benefit Updates",
    isFinished: false,
    uuid: "conv-018",
    text: [
      {
        author: "HR Department",
        sentDate: new Date("2024-12-28T09:00:00"),
        title: "2025 Employee Benefits Update",
        message:
          "Dear all, We're excited to announce some enhancements to our employee benefits package for 2025, including improved health insurance coverage and a new wellness program. Details attached.",
      },
      {
        author: "Tom Baker",
        sentDate: new Date("2024-12-28T09:45:00"),
        title: "Re: 2025 Employee Benefits Update",
        message: "This is great news! When will the new benefits take effect?",
      },
    ],
  },
  {
    summary: "Office Equipment Upgrade",
    isFinished: true,
    uuid: "conv-019",
    text: [
      {
        author: "IT Department",
        sentDate: new Date("2024-12-29T10:00:00"),
        title: "Upcoming Office Equipment Upgrade",
        message:
          "We'll be upgrading all office computers and peripherals next month. Please save any important files to the cloud before January 15th.",
      },
      {
        author: "Sarah Lee",
        sentDate: new Date("2024-12-29T10:30:00"),
        title: "Re: Upcoming Office Equipment Upgrade",
        message:
          "Will we need to be out of the office during the upgrade? I have some important client meetings scheduled.",
      },
      {
        author: "IT Department",
        sentDate: new Date("2024-12-29T11:15:00"),
        title: "Re: Upcoming Office Equipment Upgrade",
        message:
          "Hi Sarah, the upgrade will be done after hours, so it won't affect your workday. Your new equipment will be ready when you come in the next morning.",
      },
    ],
  },
  {
    summary: "Annual Company Picnic Planning",
    isFinished: false,
    uuid: "conv-020",
    text: [
      {
        author: "Events Committee",
        sentDate: new Date("2024-12-30T13:00:00"),
        title: "2025 Annual Company Picnic - Ideas Wanted!",
        message:
          "It's time to start planning our annual company picnic! We're looking for theme ideas and activity suggestions. Please share your thoughts!",
      },
      {
        author: "Mike Johnson",
        sentDate: new Date("2024-12-30T13:45:00"),
        title: "Re: 2025 Annual Company Picnic - Ideas Wanted!",
        message:
          "How about a 'Around the World' theme? We could have food and games from different cultures!",
      },
    ],
  },
  {
    summary: "New Product Development Brainstorming",
    isFinished: true,
    uuid: "conv-021",
    text: [
      {
        author: "Product Manager",
        sentDate: new Date("2024-12-31T09:00:00"),
        title: "Brainstorming Session for New Product Line",
        message:
          "Team, let's schedule a brainstorming session for our new product line. Please come prepared with at least three ideas to discuss.",
      },
      {
        author: "Design Lead",
        sentDate: new Date("2024-12-31T09:30:00"),
        title: "Re: Brainstorming Session for New Product Line",
        message:
          "Sounds great! Should we focus on any particular market segment or price point?",
      },
      {
        author: "Product Manager",
        sentDate: new Date("2024-12-31T10:15:00"),
        title: "Re: Brainstorming Session for New Product Line",
        message:
          "Good question. Let's target the mid-range market and focus on sustainability as a key feature. We'll discuss more in the meeting.",
      },
    ],
  },
  {
    summary: "Year-End Performance Bonuses",
    isFinished: true,
    uuid: "conv-022",
    text: [
      {
        author: "Finance Department",
        sentDate: new Date("2025-01-02T11:00:00"),
        title: "Year-End Performance Bonuses Announcement",
        message:
          "We're pleased to announce that year-end performance bonuses will be distributed on January 15th. Congratulations to all for a successful year!",
      },
      {
        author: "Emma Thompson",
        sentDate: new Date("2025-01-02T11:30:00"),
        title: "Re: Year-End Performance Bonuses Announcement",
        message:
          "This is great news! Will we receive a breakdown of how the bonuses were calculated?",
      },
      {
        author: "Finance Department",
        sentDate: new Date("2025-01-02T13:00:00"),
        title: "Re: Year-End Performance Bonuses Announcement",
        message:
          "Hi Emma, yes, you'll receive a detailed breakdown along with your bonus notification. If you have any questions after reviewing, please let us know.",
      },
    ],
  },
  {
    summary: "New Office Location Announcement",
    isFinished: false,
    uuid: "conv-023",
    text: [
      {
        author: "CEO",
        sentDate: new Date("2025-01-03T14:00:00"),
        title: "Exciting News: We're Moving!",
        message:
          "I'm thrilled to announce that we'll be moving to a new, larger office space in the downtown area this spring. This move will accommodate our growing team and provide better facilities.",
      },
      {
        author: "HR Manager",
        sentDate: new Date("2025-01-03T14:30:00"),
        title: "Re: Exciting News: We're Moving!",
        message:
          "This is fantastic! When can we expect more details about the move timeline and any changes to commute options?",
      },
    ],
  },
  {
    summary: "Customer Appreciation Event Planning",
    isFinished: true,
    uuid: "conv-024",
    text: [
      {
        author: "Marketing Director",
        sentDate: new Date("2025-01-04T09:00:00"),
        title: "Planning for Annual Customer Appreciation Event",
        message:
          "Team, it's time to start planning our annual customer appreciation event. Please share your ideas for making this year's event special.",
      },
      {
        author: "Event Coordinator",
        sentDate: new Date("2025-01-04T09:45:00"),
        title: "Re: Planning for Annual Customer Appreciation Event",
        message:
          "How about a sustainability theme this year? We could showcase our eco-friendly initiatives and offer workshops on reducing carbon footprint.",
      },
      {
        author: "Sales Manager",
        sentDate: new Date("2025-01-04T10:30:00"),
        title: "Re: Planning for Annual Customer Appreciation Event",
        message:
          "I love the sustainability idea! We could also invite some of our top clients to speak about how our products have helped their businesses.",
      },
    ],
  },
  {
    summary: "Internship Program Launch",
    isFinished: false,
    uuid: "conv-025",
    text: [
      {
        author: "HR Department",
        sentDate: new Date("2025-01-05T11:00:00"),
        title: "New Summer Internship Program",
        message:
          "We're excited to announce the launch of our new summer internship program. Please spread the word to universities and potential candidates.",
      },
      {
        author: "Department Head",
        sentDate: new Date("2025-01-05T11:45:00"),
        title: "Re: New Summer Internship Program",
        message:
          "This is a great initiative! How many interns are we planning to take on, and in which departments?",
      },
    ],
  },
  {
    summary: "Annual Charity Drive Kickoff",
    isFinished: true,
    uuid: "conv-026",
    text: [
      {
        author: "Community Outreach Team",
        sentDate: new Date("2025-01-06T10:00:00"),
        title: "Kickoff: Annual Charity Drive",
        message:
          "It's time for our annual charity drive! This year, we're supporting local education initiatives. Let's aim to beat last year's donation record!",
      },
      {
        author: "Employee A",
        sentDate: new Date("2025-01-06T10:30:00"),
        title: "Re: Kickoff: Annual Charity Drive",
        message:
          "Excited to participate! Are we doing any special events or challenges as part of the drive?",
      },
      {
        author: "Community Outreach Team",
        sentDate: new Date("2025-01-06T11:15:00"),
        title: "Re: Kickoff: Annual Charity Drive",
        message:
          "Great question! We're planning a charity run and a bake sale. More details will be announced next week.",
      },
    ],
  },
  {
    summary: "Quarterly All-Hands Meeting",
    isFinished: false,
    uuid: "conv-027",
    text: [
      {
        author: "Executive Assistant",
        sentDate: new Date("2025-01-07T09:00:00"),
        title: "Q1 All-Hands Meeting Schedule",
        message:
          "Our Q1 all-hands meeting is scheduled for next Friday at 2 PM in the main conference room. Please submit any topics you'd like addressed to your department head by Wednesday.",
      },
      {
        author: "Team Lead",
        sentDate: new Date("2025-01-07T09:30:00"),
        title: "Re: Q1 All-Hands Meeting Schedule",
        message:
          "Thanks for the heads up. Will there be a virtual option for remote team members?",
      },
    ],
  },
  {
    summary: "New Health and Safety Protocols",
    isFinished: true,
    uuid: "conv-028",
    text: [
      {
        author: "Health and Safety Officer",
        sentDate: new Date("2025-01-08T11:00:00"),
        title: "Updated Health and Safety Protocols",
        message:
          "In light of recent health advisories, we've updated our office health and safety protocols. Please review the attached document and implement these changes immediately.",
      },
      {
        author: "Office Manager",
        sentDate: new Date("2025-01-08T11:30:00"),
        title: "Re: Updated Health and Safety Protocols",
        message:
          "Thank you for the update. I'll ensure all common areas are adjusted to meet the new requirements. Do we need to order any additional supplies?",
      },
      {
        author: "Health and Safety Officer",
        sentDate: new Date("2025-01-08T12:15:00"),
        title: "Re: Updated Health and Safety Protocols",
        message:
          "Yes, please order additional hand sanitizer stations and masks. I'll send you a detailed list of required supplies this afternoon.",
      },
    ],
  },
  {
    summary: "Employee Training and Development Program",
    isFinished: false,
    uuid: "conv-029",
    text: [
      {
        author: "Learning and Development Team",
        sentDate: new Date("2025-01-09T14:00:00"),
        title: "New Employee Training and Development Program",
        message:
          "We're launching a new training and development program next month. This program will offer various courses to enhance your skills and advance your career. More details to follow soon.",
      },
      {
        author: "Employee B",
        sentDate: new Date("2025-01-09T14:30:00"),
        title: "Re: New Employee Training and Development Program",
        message:
          "This sounds great! Will the courses be during work hours or after?",
      },
    ],
  },
  {
    summary: "Company Anniversary Celebration",
    isFinished: true,
    uuid: "conv-030",
    text: [
      {
        author: "CEO",
        sentDate: new Date("2025-01-10T09:00:00"),
        title: "Celebrating Our 20th Company Anniversary",
        message:
          "As we approach our 20th anniversary, I want to thank each of you for your hard work and dedication. We'll be having a special celebration next month to mark this milestone.",
      },
      {
        author: "Events Team",
        sentDate: new Date("2025-01-10T09:45:00"),
        title: "Re: Celebrating Our 20th Company Anniversary",
        message:
          "We're excited to plan this celebration! We're thinking of a gala dinner with awards ceremony. Any other suggestions?",
      },
      {
        author: "HR Director",
        sentDate: new Date("2025-01-10T10:30:00"),
        title: "Re: Celebrating Our 20th Company Anniversary",
        message:
          "A gala dinner sounds perfect. Let's also consider creating a commemorative book or video highlighting our company's journey and achievements.",
      },
    ],
  },
];

const filterGroupTree: FilterGroup = {
  name: "Main",
  filters: [
    {
      filter: { type: "is-finished", searchedState: true },
      color: "#4CAF50",
      childFilterGroup: {
        name: "Completed Tasks",
        filters: [
          {
            filter: { type: "from-date", date: new Date("2024-12-01") },
            color: "#8BC34A",
            childFilterGroup: {
              name: "Recent Completions",
              filters: [
                {
                  filter: {
                    type: "title",
                    searchedKeywords: ["Project", "Milestone"],
                  },
                  color: "#CDDC39",
                  title: "Completed Projects",
                },
                {
                  filter: {
                    type: "latest-author",
                    searchedAuthors: ["Project Manager", "Team Lead"],
                  },
                  color: "#FFC107",
                  title: "Management Approvals",
                },
              ],
              includesOther: false,
            },
          },
          {
            filter: { type: "title", searchedKeywords: ["Report", "Analysis"] },
            color: "#FF9800",
            title: "Completed Reports",
          },
        ],
        includesOther: true,
      },
    },
    {
      filter: { type: "is-finished", searchedState: false },
      color: "#F44336",
      childFilterGroup: {
        name: "Ongoing Tasks",
        filters: [
          {
            filter: { type: "from-date", date: new Date("2025-01-01") },
            color: "#E91E63",
            childFilterGroup: {
              name: "New Year Initiatives",
              filters: [
                {
                  filter: {
                    type: "title",
                    searchedKeywords: ["Strategy", "Planning"],
                  },
                  color: "#9C27B0",
                  childFilterGroup: {
                    name: "Strategic Planning",
                    filters: [
                      {
                        filter: {
                          type: "latest-author",
                          searchedAuthors: ["CEO", "Director"],
                        },
                        color: "#673AB7",
                        title: "Executive Strategies",
                      },
                      {
                        filter: {
                          type: "title",
                          searchedKeywords: ["Budget", "Forecast"],
                        },
                        color: "#3F51B5",
                        title: "Financial Planning",
                      },
                    ],
                    includesOther: false,
                  },
                },
                {
                  filter: {
                    type: "latest-author",
                    searchedAuthors: ["HR Department"],
                  },
                  color: "#2196F3",
                  title: "HR Initiatives",
                },
              ],
              includesOther: true,
            },
          },
          {
            filter: { type: "title", searchedKeywords: ["Urgent", "Critical"] },
            color: "#03A9F4",
            title: "High Priority Tasks",
          },
        ],
        includesOther: false,
      },
    },
    {
      filter: {
        type: "latest-author",
        searchedAuthors: ["Events Committee", "Marketing Team"],
      },
      color: "#00BCD4",
      childFilterGroup: {
        name: "Events and Marketing",
        filters: [
          {
            filter: { type: "title", searchedKeywords: ["Campaign", "Launch"] },
            color: "#009688",
            childFilterGroup: {
              name: "Marketing Campaigns",
              filters: [
                {
                  filter: { type: "from-date", date: new Date("2025-02-01") },
                  color: "#4CAF50",
                  title: "Upcoming Campaigns",
                },
                {
                  filter: { type: "is-finished", searchedState: false },
                  color: "#8BC34A",
                  childFilterGroup: {
                    name: "Ongoing Campaigns",
                    filters: [
                      {
                        filter: {
                          type: "title",
                          searchedKeywords: ["Social Media", "Digital"],
                        },
                        color: "#CDDC39",
                        title: "Digital Campaigns",
                      },
                      {
                        filter: {
                          type: "title",
                          searchedKeywords: ["Print", "Traditional"],
                        },
                        color: "#FFEB3B",
                        title: "Traditional Campaigns",
                      },
                    ],
                    includesOther: true,
                  },
                },
              ],
              includesOther: false,
            },
          },
          {
            filter: {
              type: "title",
              searchedKeywords: ["Conference", "Seminar"],
            },
            color: "#FFC107",
            title: "Corporate Events",
          },
        ],
        includesOther: true,
      },
    },
  ],
  includesOther: true,
};


export { conversations, filterGroupTree };
