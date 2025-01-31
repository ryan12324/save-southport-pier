export function formatPostcode(postcode: string): string {
    // Remove all spaces and convert to uppercase
    const clean = postcode.replace(/\s+/g, '').toUpperCase();
    
    // Match UK postcode format
    const match = clean.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)(\d[A-Z]{2})$/);
    
    if (match) {
        // Return formatted postcode with space
        return `${match[1]} ${match[2]}`;
    }
    
    // If not a valid format, return original cleaned input
    return clean;
}
