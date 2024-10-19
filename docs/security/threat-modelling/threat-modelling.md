# :shield: Threat Modelling

## :exclamation: Security Matters

!!! warning "Optimist Bias"
    - 'It will not happen to us'
    - 'We have "good" security'

## :lock: Secure by design/Secure by default

- Think about security from the start
- Move security assurance as early as possible ('Shift left')

## :question: What is "Good Security"?

## :balance_scale: Risk-based security

- There is no absolute security

!!! info "Threat Modelling"
    Context-specific Risk-based security assessment. Reviewing a system architecture to identify threats

## :building_construction: Threat modelling fundamentals

1. Scope definition
2. Information Assets
3. Information Systems
4. Threat Actors
5. Data Flows
6. Data flow Diagrams
7. Attack Trees (optional)
8. STRIDE Analysis
9. Threat catalog
10. Mitigations/Control
11. Risk

## :rocket: Start with the solution

- `Scope or Trust Boundaries`: what are we responsible for
- `Information assets`: Where is info stored and how sensitive it is
- `Information Systems`: Where processes info and interact with users or other systems
- `Data Flow`: Where does info travel from and to

## :art: Dataflow notation

DFD notation

## :toolbox: Tools you can use

- [Draw.io](https://www.drawio.com/blog/threat-modelling) - for drawing threat modelling diagrams
- AWS Threat Composer
- Microsoft Threat Modelling Tool
- OWASP's Threat Dragon
- OWASP's pytm
- TaaC-AI

## :busts_in_silhouette: Threat Actors

!!! info "External threat actors"
    - Script kiddies
    - Professional bug hunters
    - Cybercriminal gangs
    - Cyber adversary mercenaries
    - Nation state actors

!!! warning "Internal actors"
    - Malicious or compromised insiders
    - Accidental leaks

## :bomb: Threats, Attacks, Vulnerabilities

- Vulnerabilities: Weakness in systems or processes that can be exploited

## :book: Threat Catalogues

- MITRE ATT&CK - Adversarial Tactics, Techniques & Common Knowledge
  - CWE
  - CVE
- NIST - National Vulnerability Database

## :dart: STRIDE

- `S`poofing - authentication
- `T`ampering - integrity
- `R`epudiation - non repudiation
- `I`nformation Disclosure
- `D`enial of Service
- `E`levation of Privilege

## :link: Connecting Threat Models Secure Delivery

!!! tip "Mapping Standard to a lightweight workflow"

    1. **Feature Design**
       - Architecture
       - Threat Model + Customer Security Standards
       - Security Controls

    2. **Sprint Delivery**
       - Story Acceptance Criteria
       - Implementation

    3. **Release**
       - Assurance (Security Testing, Pentest)

    4. **Operations**
       - Monitoring
       - Alerting
       - Incident Response
       - Disaster Recovery

## :eyes: Example

Threat model of a small business that wants to integrate payment services into their store

![Threat model light](img/threatmodel-light.drawio.svg#only-light)
![Threat model dark](img/threatmodel-dark.drawio.svg#only-dark)