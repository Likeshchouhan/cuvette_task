const sendJobAlert = async (req, res) => {
     const { candidateEmails, jobId } = req.body;
     const job = await Job.findById(jobId);
   
     if (!job) return res.status(404).json({ message: 'Job not found' });
   
     candidateEmails.forEach(email => {
       transporter.sendMail({
         to: email,
         subject: `New Job Posting: ${job.title}`,
         text: `A new job has been posted: ${job.description}`
       });
     });
   
     res.status(200).json({ message: 'Emails sent successfully!' });
   };
   