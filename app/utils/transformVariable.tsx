// utils/variableTransform.js
export function cleanUserName(variable:any) {
    // Remove white spaces and convert to hyphen
    let transformedVariable = variable.replace(/\s+/g, '-');
  
    // Convert to lowercase
    transformedVariable = transformedVariable.toLowerCase();
  
    // Strip special characters
    transformedVariable = transformedVariable.replace(/[^\w-]+/g, '');
  
    return cleanUserName;
  }
  