# Threat Modelling

## Security Matters

`Optimist Bias`:

- 'It will not happen to us'
- 'We have "good" security'

## Secure by design/Secure by default

- Think about security from the start
- Move security assurance as early as possible ('Shift left')

## What is "Good Security"?

## Risk-based security

- There is no absolute security

`Threat Modelling` - Context-specific Risk-based security assessment. Reviewing a system architecture to indentify threats

## Threat modelling fundamentals

- Scope definition
- Information Assets
- Information Systems
- Threat Actors
- Data Flows
- Data flow Diagrams
- Attack Trees (optional)
- STRIDE Analysis
- Threat catalog
- Mitigations/Control
- Risk

## Start with the solution

- `Scope or Trust Boundaries`: what are we responsible for
- `Information assets`: Where is info stored adn how sensitive it is
- `Information Systems`: Where processes info and interact with users or other systems
- `Data Flow`: Where does info travel from and to

## Dataflow notation

DFD notation

## Tools you can use

- Draw.io - for [drawing](https://www.drawio.com/blog/threat-modelling) threat modelling diagrams
- AWS Threat Composer
- Microsoft Threat Modelling Tool
- OWASP's Threat Dragon
- OWASP's pytm
- TaaC-AI

## Threat Actors

- Different types of external threat actors:
  - Script kiddies
  - Professional bug hunters
  - Cybercriminal gangs
  - Cyber adversary mercenaries
  - Nation state actors
- Internal actors
  - Malicious or compromised insiders
  - Accidental leaks

## Threats, Attacks, Vulnerabilities

- Vulnerabilities: Weakness in systems or processes that can be ...

## Threat Catalogues

- MITRE ATT%CK - Adversarial Tactics, Techiques & Common Knowledge
  - CWE
  - CVE
- NIST - National Vulnerabilitiy Database

## STRIDE

- `S`poofing - authentication
- `T`empering - integrity
- `R`epudiation - non repudiation
- `I`nformatiom Disclosure
- `D`eniol of Service
- `E`levation of Privilage

## Connecting Threat Models Secure Delivery

Mapping Standard to a lightweight workflow

- Feature Design
  - Architecture
  - Threat Model + Customer Security Standards
  - Security Controls
- Spring Delivery
  - Story Acceptance Criteria
  - Implementation
- Release
  - Assurance (Security Testing, Pentest)
- Operations
  - Monitoring
  - Alerting
  - Incident
  - Response
  - Disaster
  - Recovery



## Example

Threat model of the small business that wants to integrate payment services into their store

![](img/threatmodel-light.drawio.svg#only-light)
![](img/threatmodel-dark.drawio.svg#only-dark)
