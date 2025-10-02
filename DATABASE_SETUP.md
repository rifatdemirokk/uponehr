# Database Setup Instructions

## Success Stories Table Setup

To enable the Success Stories functionality, you need to apply the database migration to your Supabase instance.

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://0ec90b57d6e95fcbda19832f.supabase.co
2. Navigate to the SQL Editor (left sidebar)
3. Click "New Query"
4. Copy and paste the contents of `supabase/migrations/001_create_success_stories.sql`
5. Click "Run" to execute the migration

### Option 2: Manual Table Creation

If you prefer to create the table manually:

1. Go to Table Editor in Supabase Dashboard
2. Create a new table named `success_stories`
3. Add the following columns:
   - `id` (uuid, primary key, default: gen_random_uuid())
   - `company_name` (text, required)
   - `company_logo` (text, nullable)
   - `image_url` (text, nullable)
   - `story_text` (text, required)
   - `industry` (text, required)
   - `employees_count` (int4, default: 0)
   - `order_index` (int4, default: 0)
   - `created_at` (timestamptz, default: now())
   - `updated_at` (timestamptz, default: now())

4. Enable Row Level Security (RLS)
5. Add policies:
   - SELECT: Public read access
   - INSERT/UPDATE/DELETE: Authenticated users only

### Verification

After applying the migration:
1. Go to the Success Stories page: http://localhost:5173/success-stories
2. You should see 3 pre-populated example stories
3. If the table is empty, no stories will display

### Adding New Success Stories

You can add new success stories through:
1. Supabase Dashboard Table Editor
2. Custom admin panel (to be implemented)
3. Direct SQL INSERT statements

Example INSERT:
```sql
INSERT INTO success_stories (
  company_name,
  image_url,
  story_text,
  industry,
  employees_count,
  order_index
) VALUES (
  'Your Company Name',
  'https://example.com/image.jpg',
  'Your success story text here...',
  'Industry Name',
  100,
  4
);
```

## Environment Variables

Make sure your `.env` file contains:
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```
