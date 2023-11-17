import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  @Input() bidData: any; 
  private countdownInterval: any;
  public timeLeft: any;

  ngOnInit(): void {
    this.updateCountdown(); // Initial call to set the initial value

    // Update the countdown every second
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.countdownInterval);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const closingTime = this.bidData.closingTimestamp.getTime();
    const timeDifference = closingTime - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      this.timeLeft = 'Bid Closed';
      // Optionally, you can clear the interval here if the countdown reaches zero
      clearInterval(this.countdownInterval);
    }
  }
}

