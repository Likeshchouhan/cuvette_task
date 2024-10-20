const postJob = async (req, res) => {
     const { title, description, experienceLevel, endDate } = req.body;
     const companyId = req.user.id;
   
     try {
       const job = new Job({ title, description, experienceLevel, endDate, companyId });
       await job.save();
       res.status(201).json({ job });
     } catch (error) {
       res.status(500).json({ message: 'Failed to post job' });
     }
   };
   