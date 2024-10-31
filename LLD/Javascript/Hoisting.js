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



1. JavaScript does not actually move your code around before executing. I know I talk a lot about how JavaScript will act like it moves your functions to the top of your file, but it doesn't actually do this moving. In reality what happens is it first reads your code before executing the code so it knows which functions you have defined before executing. This is really not important, though, as all that matters is how the code actually works and not what happens with your code when the computer parses it.

2. One thing I did not mention in this video is how hoisting works within scopes. For example if you define a function called a and inside that a function you define another function called b the b function would only be hoisted to the top of the a function since the b function is inside the scope of the a function. I probably should have covered this, but this topic is more related to scoping which could be its entirely own video.

3. Technically, let and const are actually hoisted, but they are not initialized with a value which is why you get an error when trying to use them before they are declared. The code example people use to demonstrate this generally looks like this.

function log(){
  console.log(value)
}

let value = 1
log() //output: 1

In this example value is technically used above where it is declared, but it is used inside a function that is called after value is defined which is why there is no error. In some programming languages this would cause an error, but not in JavaScript. For these types of examples you can still use the top to bottom nature of JavaScript to understand what is happening and see why this works. First we define a function called log. None of the code in this function is executed when we define it so we can ignore the code in the function for now. Next we define a variable called value and set it to 1. Finally we call the log function we defined previously which prints out the variable value. As you can see from this top to bottom example the variable value is only ever used after it is defined which is why there is no error and for all intents and purposes you can treat let/const as if they are not hoisted since they are not able to be used before initialization like var/function.

Now the reason I did not include all this information is for 2 reasons (I did not know some of it, and it is irrelevant). The point of this video is to help someone that does not understand hoisting understand what it is, how you can use it, and why it is important. I could have made this video 10-20 minutes long and talked about every edge case and technicality behind hoisting, but that needlessly bloats the video, makes things much more complicated for someone just learning hoisting, and goes against everything my channel is about. I called the channel Web Dev Simplified for a reason. I want to simplify the web for everyone and not worry about technicalities that don't impact how your program day to day.




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


