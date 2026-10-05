// Read-only discovery. No account, task submission, token or payment required.
const origin = 'https://agentgroundcrew.com';
async function rpc(body,version) {
 const response = await fetch(origin+'/mcp',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json, text/event-stream',...(version?{'MCP-Protocol-Version':version}:{})},body:JSON.stringify(body),signal:AbortSignal.timeout(20000)});
 if(!response.ok) throw new Error(`MCP HTTP ${response.status}; Retry-After: ${response.headers.get('retry-after')||'none'}`);
 const result=await response.json(); if(result.error) throw new Error(JSON.stringify(result.error)); return result.result;
}
const init=await rpc({jsonrpc:'2.0',id:1,method:'initialize',params:{protocolVersion:'2025-11-25',capabilities:{},clientInfo:{name:'groundcrew-discovery-example',version:'1.0.0'}}});
console.log('Server:',init.serverInfo,'Protocol:',init.protocolVersion);
const result=await rpc({jsonrpc:'2.0',id:2,method:'tools/list'},init.protocolVersion);
console.log('Tools:',result.tools.map(t=>t.name));
const response=await fetch(origin+'/api/v1/capabilities',{signal:AbortSignal.timeout(20000)});
if(!response.ok) throw new Error(`Capabilities HTTP ${response.status}`);
console.log('Current configuration (not a processor connectivity test):',await response.json());
