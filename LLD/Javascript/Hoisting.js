// The feature where we can access variables and function even before they are declared is called hoisting
// Only variables with var keyword can be accessed

// console.log(msg);  // Undefined - msg not declared
// var msg = "Hi";

// greet(); // Hi I am JK

// function greet() {
//     console.log(msg, "I am JK"); 
// }

// const x = (a, b) => { 
//     return a + b; 
// };

// console.log(x(1,21));






/*

console.log(msg); //ReferenceError: Cannot access 'msg' before initialization
let/const msg = "Hi";

function greet() {
    console.log(msg, "I am JK");
}

greet();

Output: ReferenceError: Cannot access 'msg' before initialization








In ServiceNow’s Governance, Risk, and Compliance (GRC) module, policy exceptions are used to manage temporary deviations from established policies. Here are the key aspects of policy exceptions in ServiceNow GRC:

Requesting Exceptions: Users can request policy exceptions through the Employee Center or other ServiceNow applications, such as Vulnerability Response. This process involves submitting a request that includes the rationale for the exception, supporting evidence, and any mitigating controls1.
Approval Workflow: Policy exception requests go through an approval workflow, which typically involves the control owner, compliance manager, and risk manager. They review the request, assess the associated risks, and decide whether to approve or reject the exception2.
Mitigating Controls: When creating a policy exception, it’s important to identify and document any mitigating controls that will be put in place to reduce the risk associated with the exception. These controls help ensure that the organization remains compliant and secure despite the deviation2.
Tracking and Documentation: Approved policy exceptions are tracked within the system, and detailed records are maintained. This includes the rationale for the exception, the duration of the exception, and any conditions or controls that must be met3.
Extensions and Renewals: If an exception needs to be extended beyond its initial validity period, users can request an extension. This request goes through a similar approval process to ensure that the extended exception is still justified and properly managed2.
Reporting and Visibility: ServiceNow provides dashboards and reports to give visibility into all active policy exceptions. This helps compliance and risk management teams monitor exceptions and ensure they are managed appropriately3.
By effectively managing policy exceptions, organizations can maintain flexibility while ensuring that any deviations from standard policies are controlled and documented.


When a policy exception is added in ServiceNow GRC, it can indeed impact the controls related to that policy. Here are some key points to consider:

Mitigating Controls: When a policy exception is granted, it often includes the implementation of mitigating controls to address the risks associated with the exception. These controls are documented and tracked within the system to ensure that the organization remains compliant and secure despite the deviation.
Control Status: The status of the affected controls may change to reflect the exception. For example, a control might be marked as “non-compliant” but with an approved exception, indicating that the deviation is recognized and managed2.
Issue Management: If the policy exception is related to an existing issue, the issue’s status might not change automatically. It will still need to be manually updated by the assigned user to reflect the exception3.
Continuous Monitoring: The controls associated with the policy exception will be subject to continuous monitoring to ensure that the mitigating controls are effective and that the risks remain within acceptable limits1.
By managing these aspects, ServiceNow GRC ensures that policy exceptions are handled in a controlled and documented manner, maintaining overall compliance and risk management.

Is there a specific scenario or control you are concerned about in relation to policy exceptions?

1: ServiceNow Community: Policy Exception - Mitigating Controls 2: ServiceNow Community: Policy Exception: Is it Issue or Impacted Controls? 3: ServiceNow Community: Benefits of ‘Policy Exception’ for Issue record




*/


