# FlowFix Services Catalog & Pricing

This document contains the official services, starting prices, and booking categories for FLowFix.

## Standard Services
The following services can be booked through the standard scheduling flow.

### Leak Detection
- **Starting Price:** $85
- **Urgency Level:** Medium
- **Description:** Professional inspection to identify water/gas leaks.

### Drain Cleaning
- **Starting Price:** $120
- **Urgency Level:** Medium
- **Description:** Clearing obstructions in sinks, toilets, or main sewer lines.

### Pipe Installation
- **Starting Price:** $150
- **Urgency Level:** Low
- **Description:** Installation of new pipe or replacement of old pipes.

### Bathroom & Fixtures Installation
- **Starting Price:** $180
- **Urgency Level:** High
- **Description:** Installation of toilets, sinks, faucets, showerheads, and other bathroom hardware.

### Water Heater Services 
- **Starting Price:** $220
- **Urgency Level:** High
- **Description:** Repair, maintenance, or installation of traditional and tankless water heaters.

### Sewer Line Services
- **Starting Price:** $3,000
- **Urgency Level:** High
- **Description:** Comprehensive repair or full replacement of the main sewer line connecting the property to the municipal system. Our sewer line service includes diagnostic camera inspection, excavation, and/or relining.
- **Instructions:** If the customer indicates multiple clogged drains throughout their house or sewage backup, prioritize this service. This involves critical infrastructure repair.

## Emergency Services
### Immediate Help / Emergency Dispatch
- **Starting Price:** $250
- **Urgency Level:** High
- **Description:** For urgent issues requiring immediate professional intervention/help.
- **Instructions:** If the customer indicates a flood, burst pipe, or gas smell, the AI should prioritize this category and confirm priority dispatch.

## Out of Scope / Not Provided
To ensure that the AI provides accurate guidance/support to the customer, the following services are strictly NOT offered by FlowFix:
* **HVAC & Cooling:** No AC repair, furnace maintenance, or ventilation work.
* **Electrical:** No general wiring or panel upgrades (unless specifically for a water heater).
* **Construction:** No tiling, flooring, or drywall repair after a leak is fixed.

> **Note to Agent:** If a customer asks for these services, politely inform them that we specialize exclusively in plumbing and suggest they contact a licensed specialist in those fields.

## Agent Chat Protocol (Data Extraction)
To successfully schedule an appointment, the agent must collect the following "Required Fields" through the conversation with the customer:

1. **Urgency:** Determine if it is an emergency or non-emergency request.
2. **The Issue:** A brief description of the plumbing problem/issue that the customer is facing.
3. **Service Category:** Map the issue to one of the services above.

Based off of the customer's response, the agent should categorize the issue into one of the categories:
- Leak Detection
- Drain Cleaning
- Pipe Installation
- Bathroom & Fixtures (Installation & Repair)
- Water Heater Services
- Sewer Line
- Emergency
- Water-related

If the customer's issue is not identified, categorize the issue as "Other / Not Sure" and proceed to capture free-text description and ask the customer to clarify if needed.

4. **Location:** Confirm the customer's address and ensure that it is within the New York City area (since that is the area that FlowFix provides services).

5. **Time Slot:** Offer available time slots to the customer. FlowFix operates 24/7. Refer to availability_schedule.md to determine which time slot is suggested to the customer.
