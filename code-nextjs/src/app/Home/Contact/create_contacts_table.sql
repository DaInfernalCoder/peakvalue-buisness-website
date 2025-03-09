-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows only authenticated users to view contact data
CREATE POLICY "Allow service role full access" 
  ON public.contacts 
  USING (true)
  WITH CHECK (true);
  
-- Create an index on email for faster searching
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts (email);

-- Create an index on created_at for sorting by date
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts (created_at);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts (status);

-- Grant access to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contacts TO service_role;
GRANT SELECT ON public.contacts TO authenticated; 