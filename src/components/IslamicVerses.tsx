import React from 'react'

export const IslamicVerses: React.FC = () => {
  return (
    <section className="islamic-verses-section">
      <div className="islamic-container">
        <div className="bismillah-line">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        
        <div className="verse-card">
          <div className="arabic-verse">وَخَلَقْنَـٰكُمْ أَزْوَٰجًا</div>
          <p className="verse-translation">
            &ldquo;And We created you in pairs.&rdquo;
          </p>
          <div className="verse-ref">&mdash; Surah An-Naba 78:8</div>
        </div>

        <div className="verse-card-large">
          <div className="arabic-verse-large">
            وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </div>
          <p className="verse-translation">
            &ldquo;And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.&rdquo;
          </p>
          <div className="verse-ref">&mdash; Surah Ar-Rum 30:21</div>
        </div>

        <div className="invitation-prayers-note">
          Your presence and prayers would make our day complete.
        </div>
      </div>
    </section>
  )
}
