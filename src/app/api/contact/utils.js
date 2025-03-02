/**
 * Utility functions for the contact form API
 */

/**
 * Validates required fields in form submission
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Validation result with error information if any
 */
export function validateContactForm(formData) {
  const { name, email, subject, message } = formData;
  
  // Check for required fields
  if (!name || !email || !subject || !message) {
    return {
      isValid: false,
      error: 'Missing required fields'
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Invalid email format'
    };
  }

  // Validate name (optional validation example)
  if (name.length < 2) {
    return {
      isValid: false,
      error: 'Name must be at least 2 characters'
    };
  }

  // Validate message (optional validation example)
  if (message.length < 10) {
    return {
      isValid: false,
      error: 'Message must be at least 10 characters'
    };
  }

  return { isValid: true };
}

/**
 * Logs API errors with consistent formatting
 * @param {string} type - The type of error
 * @param {Object} error - The error object
 */
export function logApiError(type, error) {
  console.error(`[Contact API] ${type} Error:`, error);
}

/**
 * Formats data for Supabase contact insertion
 * @param {Object} formData - The validated form data
 * @returns {Object} - Formatted data for Supabase
 */
export function formatContactData(formData) {
  const { name, email, subject, message } = formData;
  
  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    status: 'new'
  };
} 