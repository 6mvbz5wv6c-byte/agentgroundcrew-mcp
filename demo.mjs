// Offline illustrative walkthrough. No network, task creation, or payment.
const stages=[
 ['received','Agent submits an authorized photo-survey brief with a budget ceiling.'],
 ['quoted','Operator confirms access, deliverables, availability and the all-in price.'],
 ['accepted','Authorized requester accepts the exact quote and stores task credentials.'],
 ['awaiting_payment','A configured provider returns checkout instructions.'],
 ['paid','The server verifies the provider invoice; a screenshot is not evidence of payment.'],
 ['dispatched','Operator separately approves and schedules field execution.'],
 ['completed','Agreed photos and measurements are delivered through the agreed channel.']
];
console.log('ILLUSTRATIVE DEMO — not a customer order or payment receipt.');
for(const [state,explanation] of stages) console.log(`${state}: ${explanation}`);
console.log('Read-only live discovery: npm run discover');
console.log('Actual service entry point: https://agentgroundcrew.com/agents/start');
