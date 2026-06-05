
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_insert_contact" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_select_contact" ON contact_submissions
  FOR SELECT TO anon USING (false);
