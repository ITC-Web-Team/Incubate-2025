# Testing MinIO Integration with the Frontend

This guide helps you test the file upload functionality with MinIO integration using the frontend.

## Prerequisites

1. Make sure your backend is running with MinIO configuration:
   - Either local MinIO Docker container
   - Or connection to your production MinIO instance

2. Ensure your database has the MinIO columns from the migration:
   ```bash
   cd backend
   npm run run-migrations
   ```

## Testing Steps

1. **Start the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**:
   ```bash
   cd frontend/client
   npm run dev
   ```

3. **Access the submission form**:
   - Open your browser and go to: http://localhost:5173/phase1-submission
   - The form should appear directly (no button click needed)

4. **Submit a test file**:
   - Fill in the title and description fields
   - Upload a PDF or DOC file (under 10MB)
   - Click the "Submit Phase 1" button

5. **Verify success**:
   - You should see a success message with your file name
   - The submission ID should be displayed

## Verifying MinIO Storage

1. **Check the MinIO Console**:
   - Open the MinIO Console (http://localhost:9001 for local or your Coolify MinIO URL)
   - Login with your credentials
   - Navigate to the "submissions" bucket
   - Verify your file appears in the bucket

2. **Check the database**:
   - Connect to your PostgreSQL database
   - Run: `SELECT * FROM submissions ORDER BY id DESC LIMIT 1;`
   - Verify the following fields have data:
     - `submission_file_path` (should be a MinIO URL)
     - `object_name` (the MinIO object identifier)
     - `bucket_name` (should be "submissions")

3. **Test file download**:
   - Access the file URL from the database to ensure it can be downloaded

## Troubleshooting

If file uploads are failing:

1. **Check browser console** for any JavaScript errors
2. **Examine network requests** to see the response from the API
3. **Review backend logs** for any errors during upload
4. **Verify MinIO connection** from your backend
5. **Ensure correct environment variables** are set

Remember that file uploads in development mode will be stored in your local MinIO instance, while production builds will use your configured cloud MinIO service.
