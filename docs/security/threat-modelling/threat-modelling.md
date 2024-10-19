# :shield: Threat Modelling

## :exclamation: Security Matters

!!! warning "Optimist Bias"
    - 'It will not happen to us'
    - 'We have "good" security'

!!! danger "Reality Check"
    - Cyber attacks are increasingly common and sophisticated
    - No organization is too small or insignificant to be a target
    - "Good" security is a moving target and requires constant vigilance

## :lock: Secure by design/Secure by default

- Think about security from the start
- Move security assurance as early as possible ('Shift left')

!!! tip "Benefits of Secure by Design"
    - Reduces cost of fixing security issues later
    - Improves overall system reliability and trustworthiness
    - Helps meet regulatory compliance requirements
    - Builds customer trust and protects brand reputation

## :question: What is "Good Security"?

!!! info "Characteristics of Good Security"
    - Layered defenses (Defense in Depth)
    - Principle of Least Privilege
    - Regular security assessments and updates
    - Incident response plan in place
    - Employee security awareness training
    - Compliance with relevant security standards (e.g., ISO 27001, NIST)

## :balance_scale: Risk-based security

- There is no absolute security

!!! info "Threat Modelling"
    Context-specific Risk-based security assessment. Reviewing a system architecture to identify threats

!!! tip "Risk-based Approach"
    - Prioritize security measures based on potential impact and likelihood
    - Allocate resources more effectively
    - Tailor security controls to specific business needs and risk appetite

## :building_construction: Threat modelling fundamentals

!!! note "Importance of Each Step"
    - **Scope definition**: Sets clear boundaries for the assessment
    - **Information Assets**: Identifies what needs protection
    - **Information Systems**: Understands how data is processed and stored
    - **Threat Actors**: Recognizes potential attackers and their motivations
    - **Data Flows**: Traces how information moves through the system
    - **Data flow Diagrams**: Visualizes system architecture and potential attack surfaces
    - **Attack Trees**: Models possible attack scenarios (optional but useful for complex systems)
    - **STRIDE Analysis**: Systematic approach to identifying threat types
    - **Threat catalog**: Comprehensive list of potential threats
    - **Mitigations/Control**: Strategies to address identified threats
    - **Risk**: Assessment of potential impact and likelihood of threats

## :rocket: Start with the solution

- `Scope or Trust Boundaries`: what are we responsible for
- `Information assets`: Where is info stored and how sensitive it is
- `Information Systems`: Where processes info and interact with users or other systems
- `Data Flow`: Where does info travel from and to

!!! tip "Best Practices"
    - Clearly define system boundaries and interfaces
    - Classify data sensitivity levels
    - Document all systems and their interactions
    - Map data flows, including entry and exit points

## :art: Dataflow notation

DFD notation

!!! info "Common DFD Symbols"
    - Process: Circle or rounded rectangle
    - External Entity: Rectangle
    - Data Store: Open-ended rectangle or cylinder
    - Data Flow: Arrow
    - Trust Boundary: Dashed line

## :toolbox: Tools you can use

- [Draw.io](https://www.drawio.com/blog/threat-modelling) - for drawing threat modelling diagrams
- AWS Threat Composer
- Microsoft Threat Modelling Tool
- OWASP's Threat Dragon
- OWASP's pytm
- TaaC-AI

!!! tip "Tool Selection Criteria"
    - Ease of use and learning curve
    - Integration with existing development tools
    - Collaboration features
    - Reporting capabilities
    - Cost and licensing model

## :busts_in_silhouette: Threat Actors

!!! info "External threat actors"
    - Script kiddies: Inexperienced hackers using pre-made tools
    - Professional bug hunters: Skilled individuals searching for vulnerabilities
    - Cybercriminal gangs: Organized groups motivated by financial gain
    - Cyber adversary mercenaries: Skilled hackers for hire
    - Nation state actors: Government-sponsored groups with advanced capabilities

!!! warning "Internal actors"
    - Malicious or compromised insiders: Employees or contractors with malicious intent
    - Accidental leaks: Unintentional disclosure of sensitive information

!!! tip "Addressing Internal Threats"
    - Implement strong access controls and monitoring
    - Conduct regular security awareness training
    - Establish clear security policies and procedures
    - Use data loss prevention (DLP) tools

## :bomb: Threats, Attacks, Vulnerabilities

- Vulnerabilities: Weakness in systems or processes that can be exploited

!!! info "Types of Vulnerabilities"
    - Software flaws
    - Misconfigurations
    - Weak authentication mechanisms
    - Outdated systems or software
    - Social engineering susceptibility

!!! tip "Vulnerability Management"
    - Regular vulnerability scanning
    - Prompt patching and updates
    - Security code reviews
    - Penetration testing

## :book: Threat Catalogues

- MITRE ATT&CK - Adversarial Tactics, Techniques & Common Knowledge
  - CWE (Common Weakness Enumeration)
  - CVE (Common Vulnerabilities and Exposures)
- NIST - National Vulnerability Database

!!! tip "Using Threat Catalogues"
    - Reference these databases for known threats and vulnerabilities
    - Use them to inform your threat modeling process
    - Stay updated on new entries and trends

## :dart: STRIDE

!!! info "STRIDE in Detail"
    - **Spoofing**: Impersonating something or someone else
    - **Tampering**: Modifying data or code
    - **Repudiation**: Claiming to have not performed an action
    - **Information Disclosure**: Exposing information to unauthorized individuals
    - **Denial of Service**: Preventing valid users from accessing a service
    - **Elevation of Privilege**: Gaining capabilities without proper authorization

!!! tip "Applying STRIDE"
    - Use as a systematic checklist for identifying threats
    - Consider each STRIDE category for every system component
    - Map identified threats to appropriate security controls

## :link: Connecting Threat Models Secure Delivery

!!! tip "Mapping Standard to a lightweight workflow"

    1. **Feature Design**
        - Architecture: Design secure system architecture
        - Threat Model + Customer Security Standards: Identify potential threats and align with security requirements
        - Security Controls: Implement appropriate safeguards

    2. **Sprint Delivery**
        - Story Acceptance Criteria: Include security requirements in user stories
        - Implementation: Develop with security in mind, following secure coding practices

    3. **Release**
        - Assurance (Security Testing, Pentest): Verify security measures through testing and assessment

    4. **Operations**
        - Monitoring: Continuously observe system for security events
        - Alerting: Set up notifications for potential security incidents
        - Incident Response: Have a plan ready for addressing security breaches
        - Disaster Recovery: Prepare for worst-case scenarios to ensure business continuity

!!! note "Continuous Improvement"
    - Regularly review and update threat models
    - Incorporate lessons learned from incidents and near-misses
    - Stay informed about emerging threats and vulnerabilities

## :eyes: Example

Threat model of a small business that wants to integrate payment services into their store

![Threat model light](img/threatmodel-light.drawio.svg#only-light)
![Threat model dark](img/threatmodel-dark.drawio.svg#only-dark)

!!! tip "Analyzing the Example"
    - Identify trust boundaries between components
    - Map data flows, especially those crossing trust boundaries
    - Consider STRIDE threats for each component and data flow
    - Pay special attention to payment processing and data storage areas
    - Implement appropriate security controls based on identified threats